import { NextResponse } from 'next/server';
import { getTopTracks } from '@/lib/spotify';

export const dynamic = 'force-dynamic';

export async function GET() {
  const response = await getTopTracks();

  if (response.status !== 200) {
    return NextResponse.json({ error: 'Failed to fetch top tracks' }, { status: response.status });
  }

  const data = await response.json();

  const tracks = data.items.map((track: any) => ({
    title: track.name,
    artist: track.artists.map((artist: any) => artist.name).join(', '),
    album: track.album.name,
    albumImageUrl: track.album.images[0]?.url,
    songUrl: track.external_urls.spotify,
    uri: track.uri,
  }));

  return NextResponse.json({ tracks });
}
