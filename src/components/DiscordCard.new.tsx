"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface DiscordCardProps {
  username: string;
  avatarUrl: string;
  badges: Array<{
    id: string;
    name: string;
    icon: string;
  }>;
  isPlaying: {
    name: string;
    artist: string;
    duration: number;
    currentTime: number;
  };
}

export default function DiscordCard({
  username,
  avatarUrl,
  badges,
  isPlaying
}: DiscordCardProps) {
  const [currentTime, setCurrentTime] = useState(isPlaying.currentTime);
  const [isPlaying_, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(100);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying_) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= isPlaying.duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying_, isPlaying.duration]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-[400px] bg-black/30 backdrop-blur-md rounded-lg overflow-hidden border border-white/10">
      {/* Views counter */}
      <div className="flex items-center gap-1 p-3 text-white/60 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" />
        </svg>
        502
      </div>

      {/* Profile section */}
      <div className="px-6 py-4">
        {/* Avatar and username */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-purple-500/50">
              <Image
                src={avatarUrl}
                alt={username}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-medium text-white">{username}</h2>
            <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-purple-400">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mt-4">
          {badges.map((badge) => (
            <div key={badge.id} className="w-10 h-10 bg-black/40 rounded-full p-2.5 hover:bg-black/60 transition-colors">
              <Image
                src={badge.icon}
                alt={badge.name}
                width={24}
                height={24}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Grand link */}
      <div className="px-4 py-2">
        <div className="flex items-center gap-3 bg-black/40 rounded-lg p-3 text-white hover:bg-black/50 transition-colors">
          <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
            🎮
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">Grand</div>
            <div className="text-xs text-white/60 truncate">https://discord.gg/grand</div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </div>
      </div>

      {/* Add on Discord button */}
      <div className="px-4 py-2">
        <div className="flex items-center gap-3 bg-black/40 rounded-lg p-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={avatarUrl}
              alt={username}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="text-white flex items-center gap-2">
              @{username}
              <div className="w-4 h-4 bg-[#5865F2] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-3 h-3">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" />
                </svg>
              </div>
            </div>
          </div>
          <button className="bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
            Add on Discord →
          </button>
        </div>
      </div>

      {/* Music player */}
      <div className="p-4">
        <div className="bg-black/40 rounded-lg p-4">
          {/* Volume icon */}
          <div className="flex items-center gap-2 mb-4">
            <button className="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
              </svg>
            </button>
            <div className="text-lg font-medium text-white">{isPlaying.name}</div>
          </div>

          <div className="text-sm text-white/60 mb-4">{isPlaying.artist}</div>

          {/* Progress bar */}
          <div className="space-y-2">
            <div className="relative h-1 bg-white/20 rounded-full">
              <div 
                className="absolute left-0 top-0 h-full bg-white rounded-full"
                style={{ width: `${(currentTime / isPlaying.duration) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-white/60">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(isPlaying.duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-6 mt-4">
            <button className="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
              </svg>
            </button>
            <button 
              className="text-white/80 hover:text-white transition-colors"
              onClick={() => setIsPlaying(!isPlaying_)}
            >
              {isPlaying_ ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" />
                </svg>
              )}
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 