const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';
const FOLLOWED_ARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/following?type=artist';
const DEVICES_ENDPOINT = 'https://api.spotify.com/v1/me/player/devices';
const PAUSE_ENDPOINT = 'https://api.spotify.com/v1/me/player/pause';
const PLAY_ENDPOINT = 'https://api.spotify.com/v1/me/player/play';

export const getAccessToken = async () => {
  if (!client_id || !client_secret || !refresh_token) {
    console.error('Missing Spotify credentials:', {
      hasClientId: !!client_id,
      hasClientSecret: !!client_secret,
      hasRefreshToken: !!refresh_token,
    });
    throw new Error('Missing Spotify credentials');
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token as string,
    }),
  });

  const data = await response.json();
  
  if (!response.ok) {
    console.error('Spotify token error:', data);
    throw new Error(`Failed to get access token: ${data.error_description || data.error}`);
  }

  return data;
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(`${TOP_TRACKS_ENDPOINT}?limit=10&time_range=short_term`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getFollowedArtists = async () => {
  const { access_token } = await getAccessToken();

  return fetch(FOLLOWED_ARTISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getActiveDevice = async () => {
  const { access_token } = await getAccessToken();

  const response = await fetch(DEVICES_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to get devices');
  }

  const data = await response.json();
  console.log('Available devices:', data.devices);
  
  const activeDevice = data.devices.find((device: any) => device.is_active);
  
  if (!activeDevice) {
    // If no active device, return the first available device
    const firstDevice = data.devices[0] || null;
    console.log('No active device, using first:', firstDevice);
    return firstDevice;
  }
  
  console.log('Found active device:', activeDevice);
  return activeDevice;
};

export const pausePlayback = async () => {
  const { access_token } = await getAccessToken();

  try {
    const device = await getActiveDevice();
    const url = device ? `${PAUSE_ENDPOINT}?device_id=${device.id}` : PAUSE_ENDPOINT;

    console.log('Pausing on device:', device?.id || 'no specific device');

    return fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    console.error('Error getting device for pause:', error);
    // Fallback to no device targeting
    return fetch(PAUSE_ENDPOINT, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }
};

export const startPlayback = async (trackUri?: string) => {
  const { access_token } = await getAccessToken();

  try {
    const device = await getActiveDevice();
    const url = device ? `${PLAY_ENDPOINT}?device_id=${device.id}` : PLAY_ENDPOINT;
    const body = trackUri ? JSON.stringify({ uris: [trackUri] }) : undefined;

    console.log('Playing on device:', device?.id || 'no specific device');

    return fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body,
    });
  } catch (error) {
    console.error('Error getting device for play:', error);
    // Fallback to no device targeting
    const body = trackUri ? JSON.stringify({ uris: [trackUri] }) : undefined;
    return fetch(PLAY_ENDPOINT, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body,
    });
  }
};
