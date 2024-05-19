'use client'

import {Pagination} from "@nextui-org/react";

interface EpisodeSelectProps {
  max: number;
  current: number;
  seriesId: number;
}

export default function EpisodeSelect({max, current, seriesId}: EpisodeSelectProps) {
  return (
      <Pagination
          showControls total={max} initialPage={current}
          onChange={(page) => {
            window.location.href = `/anime/${seriesId}/${page}`;
          }}
      />
  );
}