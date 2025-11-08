"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react"; // ikon dari lucide-react

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => {});
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg z-50">
      <audio ref={audioRef} src="/music/background.mp3" loop />
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
      >
        {isPlaying ? <Volume2 /> : <VolumeX />}
      </button>
    </div>
  );
}
