import { NextResponse } from 'next/server';
import { getNowPlaying } from '@/lib/spotify';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  }

  const song = await response.json();

  if (!song.item) {
    return NextResponse.json({ isPlaying: false }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return NextResponse.json({
    isPlaying,
    title,
    artist,
    album,
    albumImageUrl,
    songUrl,
  }, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}
