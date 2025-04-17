import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

interface SpotifyTrack {
  name: string;
  artists: { name: string }[];
  album: {
    images: { url: string }[];
  };
  duration_ms: number;
}

interface MusicPlayerProps {
  spotifyToken?: string;
}

export default function MusicPlayer({ spotifyToken }: MusicPlayerProps) {
  const [currentTrack, setCurrentTrack] = useState<SpotifyTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!spotifyToken) return;

    // Fetch current playing track from Spotify
    const fetchCurrentTrack = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: {
            'Authorization': `Bearer ${spotifyToken}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setCurrentTrack(data.item);
          setIsPlaying(data.is_playing);
          setDuration(data.item.duration_ms / 1000);
        }
      } catch (error) {
        console.error('Failed to fetch current track:', error);
      }
    };

    fetchCurrentTrack();
    const interval = setInterval(fetchCurrentTrack, 5000);
    return () => clearInterval(interval);
  }, [spotifyToken]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !audioRef.current) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const togglePlay = async () => {
    if (!spotifyToken) return;

    try {
      await fetch(`https://api.spotify.com/v1/me/player/${isPlaying ? 'pause' : 'play'}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${spotifyToken}`
        }
      });
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Failed to toggle playback:', error);
    }
  };

  const skipTrack = async (direction: 'next' | 'previous') => {
    if (!spotifyToken) return;

    try {
      await fetch(`https://api.spotify.com/v1/me/player/${direction}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${spotifyToken}`
        }
      });
    } catch (error) {
      console.error(`Failed to skip ${direction}:`, error);
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Album Art and Track Info */}
      <div className="flex items-center space-x-4">
        {currentTrack?.album.images[0] && (
          <img 
            src={currentTrack.album.images[0].url} 
            alt="Album Art"
            className="w-16 h-16 rounded-lg shadow-lg"
          />
        )}
        <div className="flex-1 min-w-0">
          <div className="text-white font-medium truncate">
            {currentTrack?.name || 'No track playing'}
          </div>
          <div className="text-white/60 text-sm truncate">
            {currentTrack?.artists.map(a => a.name).join(', ')}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div 
        ref={progressRef}
        className="relative h-1 bg-white/20 rounded-full cursor-pointer group"
        onClick={handleProgressClick}
      >
        <motion.div 
          className="absolute h-full bg-white/40 rounded-full"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
        <div className="absolute -top-2 h-5 w-5 rounded-full bg-white transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
             style={{ left: `${(currentTime / duration) * 100}%` }}
        />
      </div>

      {/* Time Display */}
      <div className="flex justify-between text-xs text-white/60">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button 
          onClick={() => skipTrack('previous')}
          className="p-2 text-white/60 hover:text-white transition-colors"
        >
          <FaStepBackward size={20} />
        </button>
        
        <button 
          onClick={togglePlay}
          className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
        >
          {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
        </button>
        
        <button 
          onClick={() => skipTrack('next')}
          className="p-2 text-white/60 hover:text-white transition-colors"
        >
          <FaStepForward size={20} />
        </button>

        <div className="flex items-center space-x-2">
          <button 
            onClick={() => {
              setIsMuted(!isMuted);
              if (audioRef.current) {
                audioRef.current.volume = isMuted ? volume : 0;
              }
            }}
            className="p-2 text-white/60 hover:text-white transition-colors"
          >
            {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
          </button>
          
          <input 
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 accent-white/60"
          />
        </div>
      </div>
    </div>
  );
} 