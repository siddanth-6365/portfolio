import { NextResponse } from 'next/server';
import { getFollowedArtists } from '@/lib/spotify';

export const dynamic = 'force-dynamic';

export async function GET() {
  const response = await getFollowedArtists();

  if (response.status !== 200) {
    return NextResponse.json({ error: 'Failed to fetch followed artists' }, { status: response.status });
  }

  const data = await response.json();

  const artists = data.artists.items.map((artist: any) => ({
    name: artist.name,
    genres: artist.genres,
    followers: artist.followers.total,
    imageUrl: artist.images[0]?.url,
    spotifyUrl: artist.external_urls.spotify,
  }));

  return NextResponse.json({ artists });
}
