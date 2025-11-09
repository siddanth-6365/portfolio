import { NextResponse } from 'next/server';
import { pausePlayback } from '@/lib/spotify';

export const dynamic = 'force-dynamic';

export async function PUT() {
  try {
    const response = await pausePlayback();

    console.log('Pause response status:', response.status);

    // 204 No Content = success (Spotify returns 204 for successful pause)
    if (response.status === 204) {
      return NextResponse.json({ success: true, message: 'Playback paused' });
    }

    // 200 might mean already paused or no active playback
    if (response.status === 200) {
      return NextResponse.json({ success: true, message: 'Playback paused' });
    }

    if (response.status === 403) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Pause 403 error:', errorData);
      return NextResponse.json({ success: false, error: 'Premium required or restricted device' }, { status: 403 });
    }

    if (response.status === 404) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Pause 404 error:', errorData);
      return NextResponse.json({ success: false, error: 'No active device found. Please start playing music on Spotify first.' }, { status: 404 });
    }

    // Get error details if available
    let errorMessage = 'Failed to pause playback';
    try {
      const errorData = await response.json();
      console.error('Pause error:', errorData);
      errorMessage = errorData.error?.message || errorMessage;
    } catch (e) {
      // Response might not have a body
    }

    return NextResponse.json({ success: false, error: errorMessage, status: response.status }, { status: response.status });
  } catch (error) {
    console.error('Pause playback error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}
