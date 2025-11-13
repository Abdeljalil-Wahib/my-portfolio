"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  srcWebm?: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

export default function LazyVideo({
  src,
  srcWebm,
  poster,
  className,
  autoPlay = false,
  loop = false,
  muted = true,
  playsInline = true,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
          }
        });
      },
      {
        rootMargin: "50px", // Load video slightly before it comes into view
        threshold: 0.1,
      }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [isInView]);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {!isLoaded && poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt="Video thumbnail"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
      <video
        ref={videoRef}
        className={className}
        poster={poster}
        autoPlay={autoPlay && isInView}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        onLoadedData={handleLoadedData}
        preload="none"
        style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.3s" }}
      >
        {isInView && (
          <>
            {srcWebm && <source src={srcWebm} type="video/webm" />}
            <source src={src} type="video/mp4" />
          </>
        )}
      </video>
    </div>
  );
}
