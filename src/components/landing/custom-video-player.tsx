"use client";

import { cn } from "@/lib/utils";
import { Play, Pause, Rewind } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import YouTube from "react-youtube";
import type { YouTubePlayer } from "react-youtube";

export function CustomVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPlayIcon, setShowPlayIcon] = useState(true);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const videoId = "-ho4g2EGb2w";

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const onPlayerReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
  };

  const calculateNonLinearProgress = (currentTime: number, duration: number) => {
    const percentage = currentTime / duration;
    if (percentage <= 0.1) {
      // Fase 1: 0-10% do vídeo -> 0-60% da barra
      return (percentage / 0.1) * 60;
    } else if (percentage <= 0.7) {
      // Fase 2: 10-70% do vídeo -> 60-80% da barra
      return 60 + ((percentage - 0.1) / 0.6) * 20;
    } else if (percentage <= 0.8) {
      // Fase 3: 70-80% do vídeo -> 80-90% da barra
      return 80 + ((percentage - 0.7) / 0.1) * 10;
    } else {
      // Fase 4: 80-100% do vídeo -> 90-100% da barra
      return 90 + ((percentage - 0.8) / 0.2) * 10;
    }
  };

  const updateProgress = () => {
    if (!playerRef.current) return;
    const currentTime = playerRef.current.getCurrentTime();
    const duration = playerRef.current.getDuration();
    
    if (duration > 0) {
      setProgress(calculateNonLinearProgress(currentTime, duration));
    }

    // Sair da tela cheia em 1:26
    if (currentTime >= 86) {
      const iframe = playerRef.current.getIframe();
      if (document.fullscreenElement === iframe) {
        document.exitFullscreen().catch(err => console.log(err));
      }
    }
  };

  const startProgressLoop = () => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    progressIntervalRef.current = setInterval(updateProgress, 100);
  };

  const stopProgressLoop = () => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
  };
  
  const handlePlayPause = () => {
    if (!playerRef.current || isFinished) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
      const iframe = playerRef.current.getIframe();
      if (iframe && iframe.requestFullscreen) {
        iframe.requestFullscreen().catch(err => console.log(err));
      }
    }
  };

  const onPlayerStateChange = (event: { data: number }) => {
    if (event.data === YouTube.PlayerState.PLAYING) {
      setIsPlaying(true);
      setShowPlayIcon(false);
      startProgressLoop();
    } else if (event.data === YouTube.PlayerState.PAUSED) {
      setIsPlaying(false);
      setShowPlayIcon(true);
      stopProgressLoop();
    } else if (event.data === YouTube.PlayerState.ENDED) {
      setIsPlaying(false);
      setIsFinished(true);
      setShowPlayIcon(false);
      stopProgressLoop();
      setProgress(100);

      // Sair da tela cheia no final
      const iframe = playerRef.current?.getIframe();
      if (document.fullscreenElement === iframe) {
        document.exitFullscreen().catch(err => console.log(err));
      }
    }
  };

  const handleRewind = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!playerRef.current) return;
    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(Math.max(0, currentTime - 10), true);
  };

  return (
    <div 
      className={cn(
        "aspect-video w-full relative overflow-hidden group/player",
        isFinished ? "cursor-default" : "cursor-pointer"
      )}
      onClick={handlePlayPause}
    >
      <YouTube
        videoId={videoId}
        onReady={onPlayerReady}
        onStateChange={onPlayerStateChange}
        className="absolute top-0 left-0 w-full h-full"
        iframeClassName="w-full h-full"
        opts={{
          height: "100%",
          width: "100%",
          playerVars: {
            autoplay: 0,
            controls: 0,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            disablekb: 1,
            fs: 0, // Desativa o botão de fullscreen padrão
            iv_load_policy: 3,
          },
        }}
      />
      
      {showPlayIcon && !isFinished && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300">
          <Play className="h-20 w-20 text-white" fill="white" />
        </div>
      )}

      {isPlaying && (
         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover/player:bg-opacity-40 transition-all duration-300">
            <button 
                onClick={handleRewind}
                className="absolute left-4 bottom-12 p-2 text-white bg-black/30 rounded-full opacity-0 group-hover/player:opacity-100 transition-opacity duration-300"
                aria-label="Retroceder 10 segundos"
            >
                <Rewind className="h-6 w-6" />
            </button>
            <div className="opacity-0 group-hover/player:opacity-100 transition-opacity duration-300">
               <Pause className="h-20 w-20 text-white" fill="white" />
            </div>
         </div>
      )}

      {isFinished && (
         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
            <p className="text-white text-2xl font-bold font-headline">Obrigado por assistir!</p>
         </div>
      )}

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-500 bg-opacity-50">
        <div 
          className="h-full bg-primary transition-all duration-100 ease-linear" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
