"use client"

import {useEffect, useRef} from 'react';
import Artplayer from 'artplayer';
import {useIsSSR} from "@react-aria/ssr";

interface PlayerProps {
  coverImageUrl: string;
  videoUrl: string;
}

export function Player({coverImageUrl, videoUrl}: PlayerProps) {
  const artRef = useRef<HTMLDivElement>(null);
  const isSSR = useIsSSR();
  useEffect(() => {
    if (isSSR) {
      return;
    } else {
      new Artplayer({
        container: artRef.current!,
        url: videoUrl,
        poster: coverImageUrl,
        autoSize: true,
        hotkey: true,
        fullscreen: true,
        theme: '#66ccff',
        lock: true,
        fastForward: true,
        airplay: true,
        pip: true,
      });
    }
  });
  return <div ref={artRef} className='w-full h-[40rem]'></div>;
}