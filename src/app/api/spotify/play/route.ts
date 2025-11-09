import { NextResponse } from 'next/server';
import { startPlayback } from '@/lib/spotify';

export const dynamic = 'force-dynamic';

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { trackUri } = body;

    const response = await startPlayback(trackUri);

    // 204 No Content = success
    if (response.status === 204 || response.status === 200) {
      return NextResponse.json({ success: true, message: 'Playback started' });
    }

    if (response.status === 403) {
      return NextResponse.json({ success: false, error: 'Premium required' }, { status: 403 });
    }

    if (response.status === 404) {
      return NextResponse.json({ success: false, error: 'No active device found' }, { status: 404 });
    }

    // Get error details if available
    let errorMessage = 'Failed to start playback';
    try {
      const errorData = await response.json();
      errorMessage = errorData.error?.message || errorMessage;
    } catch (e) {
      // Response might not have a body
    }

    return NextResponse.json({ success: false, error: errorMessage, status: response.status }, { status: response.status });
  } catch (error) {
    console.error('Start playback error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}
