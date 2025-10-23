"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, VolumeX } from "lucide-react";

interface ThankYouVideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function ThankYouVideoPopup({
  isOpen,
  onClose,
}: ThankYouVideoPopupProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [player, setPlayer] = useState<any>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  // Load YouTube iframe API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }
  }, []);

  // Initialize player when popup opens
  useEffect(() => {
    if (isOpen && window.YT && window.YT.Player && playerRef.current) {
      const newPlayer = new window.YT.Player(playerRef.current, {
        videoId: "8L6dVtJF0Yc",
        playerVars: {
          autoplay: 1,
          rel: 0,
          modestbranding: 1,
          controls: 1,
        },
        events: {
          onReady: (event: any) => {
            setPlayer(event.target);
          },
        },
      });

      return () => {
        if (newPlayer && newPlayer.destroy) {
          newPlayer.destroy();
        }
      };
    }
  }, [isOpen]);

  // Auto-close after video ends (approximately 2-3 minutes, adjust as needed)
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 180000); // 3 minutes

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  // Handle mute/unmute
  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="fixed bottom-4 right-4 z-[60] w-[90vw] sm:w-96 md:w-[420px] shadow-2xl rounded-xl overflow-hidden bg-slate-900"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-slate-800 p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-semibold">
                شكراً لحجزك!
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="w-8 h-8 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-white" />
                ) : (
                  <Volume2 className="w-4 h-4 text-white" />
                )}
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Video */}
          <div className="aspect-video bg-black">
            <div ref={playerRef} className="w-full h-full"></div>
          </div>

          {/* Footer - Optional message */}
          <div className="bg-slate-800 p-3 text-center">
            <p className="text-slate-300 text-xs sm:text-sm">
              تم إرسال تأكيد الموعد إلى بريدك الإلكتروني
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
