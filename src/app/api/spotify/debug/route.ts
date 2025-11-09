import { NextResponse } from 'next/server';
import { getAccessToken } from '@/lib/spotify';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { access_token } = await getAccessToken();
    
    // Get user profile to check account type
    const profileResponse = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!profileResponse.ok) {
      return NextResponse.json({ error: 'Failed to get profile' }, { status: 400 });
    }

    const profile = await profileResponse.json();

    // Get current playback state
    const playbackResponse = await fetch('https://api.spotify.com/v1/me/player', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    let playback = null;
    if (playbackResponse.ok) {
      playback = await playbackResponse.json();
    }

    return NextResponse.json({
      profile: {
        id: profile.id,
        display_name: profile.display_name,
        product: profile.product, // 'premium', 'free', etc.
        country: profile.country,
      },
      playback: playback ? {
        is_playing: playback.is_playing,
        device: {
          id: playback.device?.id,
          name: playback.device?.name,
          type: playback.device?.type,
          is_active: playback.device?.is_active,
          is_private_session: playback.device?.is_private_session,
          is_restricted: playback.device?.is_restricted,
        }
      } : null,
    });
  } catch (error) {
    console.error('Debug error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}
