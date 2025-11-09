'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, Music, Users, ExternalLink, RefreshCw } from 'lucide-react';

interface Track {
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
  uri: string;
}

interface Artist {
  name: string;
  genres: string[];
  followers: number;
  imageUrl: string;
  spotifyUrl: string;
}

interface NowPlaying {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}

interface SpotifyData {
  nowPlaying: NowPlaying | null;
  topTracks: Track[];
  followedArtists: Artist[];
  error?: string;
  message?: string;
}

export default function SpotifyClient({ initialData }: { initialData: SpotifyData }) {
  const [loading, setLoading] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(initialData.nowPlaying);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Auto-refresh now playing every 5 seconds
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch('/api/spotify/now-playing', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
          },
        });
        const data = await res.json();
        if (!data.isPlaying && data.isPlaying !== false) {
          // No data or error
          return;
        }
        if (data.isPlaying === false) {
          setNowPlaying(null);
        } else {
          setNowPlaying(data);
        }
      } catch (error) {
        console.error('Failed to fetch now playing:', error);
      }
    };

    // Fetch immediately
    fetchNowPlaying();

    // Then fetch every 5 seconds
    const interval = setInterval(fetchNowPlaying, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch('/api/spotify/now-playing', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      const data = await res.json();
      if (data.isPlaying === false) {
        setNowPlaying(null);
      } else if (data.title) {
        setNowPlaying(data);
      }
    } catch (error) {
      console.error('Failed to refresh:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handlePause = async () => {
    setLoading('pause');
    setMessage('');
    try {
      const res = await fetch('/api/spotify/pause', { method: 'PUT' });
      const data = await res.json();
      setMessage(data.success ? '⏸️ Paused' : `❌ ${data.error}`);
      if (data.success) {
        // Force refresh after a short delay to let Spotify update
        setTimeout(async () => {
          await handleRefresh();
          setMessage('');
        }, 1000);
      }
    } catch (error) {
      setMessage('❌ Failed to pause');
    } finally {
      setLoading(null);
    }
  };

  const handlePlay = async (trackUri: string, trackName: string) => {
    setLoading(trackUri);
    setMessage('');
    try {
      const res = await fetch('/api/spotify/play', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackUri }),
      });
      const data = await res.json();
      setMessage(data.success ? `▶️ Playing: ${trackName}` : `❌ ${data.error}`);
      if (data.success) {
        // Force refresh after a short delay to let Spotify update
        setTimeout(async () => {
          await handleRefresh();
          setMessage('');
        }, 1000);
      }
    } catch (error) {
      setMessage('❌ Failed to play');
    } finally {
      setLoading(null);
    }
  };

  if (initialData.error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-red-500">Error</h1>
          <p className="text-gray-300">{initialData.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-purple-900 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
            🎵 Spotify Dashboard
          </h1>
          <p className="text-gray-400">Real-time music stats powered by Spotify API</p>
        </div>

        {/* Status Message */}
        {message && (
          <div className="mb-6 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg text-center border border-gray-700">
            <p className="text-lg">{message}</p>
          </div>
        )}

        {/* Now Playing */}
        <div className="mb-8 bg-gradient-to-r from-green-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Music className="w-6 h-6 text-green-400" />
              Now Playing
            </h2>
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="p-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 rounded-full transition-all"
              title="Refresh now playing"
            >
              <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>
          {nowPlaying ? (
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <img
                src={nowPlaying.albumImageUrl}
                alt={nowPlaying.album}
                className="w-32 h-32 rounded-lg shadow-2xl"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">{nowPlaying.title}</h3>
                <p className="text-gray-400 mb-2">{nowPlaying.artist}</p>
                <p className="text-sm text-gray-500 mb-4">{nowPlaying.album}</p>
                <div className="flex gap-3">
                  <button
                    onClick={handlePause}
                    disabled={loading === 'pause'}
                    className="px-6 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-600 rounded-full font-semibold transition-all flex items-center gap-2"
                  >
                    <Pause className="w-4 h-4" />
                    {loading === 'pause' ? 'Pausing...' : 'Pause'}
                  </button>
                  <a
                    href={nowPlaying.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-full font-semibold transition-all flex items-center gap-2"
                  >
                    Open in Spotify
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-400">No song currently playing</p>
          )}
        </div>

        {/* Top Tracks */}
        <div className="mb-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Music className="w-6 h-6 text-purple-400" />
            Top 10 Tracks
          </h2>
          <div className="grid gap-4">
            {initialData.topTracks.map((track, index) => (
              <div
                key={track.uri}
                className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all group"
              >
                <span className="text-2xl font-bold text-gray-600 w-8">{index + 1}</span>
                <img
                  src={track.albumImageUrl}
                  alt={track.album}
                  className="w-16 h-16 rounded shadow-lg"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{track.title}</h3>
                  <p className="text-sm text-gray-400 truncate">{track.artist}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handlePlay(track.uri, track.title)}
                    disabled={loading === track.uri}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-600 rounded-full font-semibold transition-all flex items-center gap-2 text-sm"
                  >
                    <Play className="w-4 h-4" />
                    {loading === track.uri ? 'Playing...' : 'Play'}
                  </button>
                  <a
                    href={track.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Followed Artists */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-400" />
            Followed Artists ({initialData.followedArtists.length})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {initialData.followedArtists.slice(0, 12).map((artist) => (
              <a
                key={artist.name}
                href={artist.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/70 transition-all">
                  <img
                    src={artist.imageUrl || '/placeholder-artist.png'}
                    alt={artist.name}
                    className="w-full aspect-square rounded-lg mb-3 object-cover shadow-lg group-hover:scale-105 transition-transform"
                  />
                  <h3 className="font-semibold truncate mb-1">{artist.name}</h3>
                  <p className="text-xs text-gray-400 truncate">
                    {artist.followers.toLocaleString()} followers
                  </p>
                  {artist.genres.length > 0 && (
                    <p className="text-xs text-gray-500 truncate mt-1">
                      {artist.genres.slice(0, 2).join(', ')}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Powered by Spotify Web API • Data updates in real-time</p>
        </div>
      </div>
    </div>
  );
}
