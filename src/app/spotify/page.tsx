import { getNowPlaying, getTopTracks, getFollowedArtists } from '@/lib/spotify';
import SpotifyClient from './SpotifyClient';

export const dynamic = 'force-dynamic';

async function getSpotifyData() {
  try {
    // Fetch all data in parallel
    const [nowPlayingRes, topTracksRes, followedArtistsRes] = await Promise.all([
      getNowPlaying(),
      getTopTracks(),
      getFollowedArtists(),
    ]);

    // Process now playing
    let nowPlaying = null;
    if (nowPlayingRes.status === 200) {
      const nowPlayingData = await nowPlayingRes.json();
      if (nowPlayingData.item) {
        nowPlaying = {
          isPlaying: nowPlayingData.is_playing,
          title: nowPlayingData.item.name,
          artist: nowPlayingData.item.artists.map((artist: any) => artist.name).join(', '),
          album: nowPlayingData.item.album.name,
          albumImageUrl: nowPlayingData.item.album.images[0]?.url,
          songUrl: nowPlayingData.item.external_urls.spotify,
        };
      }
    }

    // Process top tracks
    let topTracks = [];
    if (topTracksRes.status === 200) {
      const topTracksData = await topTracksRes.json();
      topTracks = topTracksData.items.map((track: any) => ({
        title: track.name,
        artist: track.artists.map((artist: any) => artist.name).join(', '),
        album: track.album.name,
        albumImageUrl: track.album.images[0]?.url,
        songUrl: track.external_urls.spotify,
        uri: track.uri,
      }));
    }

    // Process followed artists
    let followedArtists = [];
    if (followedArtistsRes.status === 200) {
      const followedArtistsData = await followedArtistsRes.json();
      followedArtists = followedArtistsData.artists.items.map((artist: any) => ({
        name: artist.name,
        genres: artist.genres,
        followers: artist.followers.total,
        imageUrl: artist.images[0]?.url,
        spotifyUrl: artist.external_urls.spotify,
      }));
    }

    return {
      nowPlaying,
      topTracks,
      followedArtists,
    };
  } catch (error) {
    console.error('Spotify data fetch error:', error);
    return {
      error: 'Failed to fetch Spotify data',
      message: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export default async function SpotifyPage() {
  const data = await getSpotifyData();

  return <SpotifyClient initialData={data} />;
}
