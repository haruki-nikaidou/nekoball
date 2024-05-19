export interface Series {
    id: number;
    name: string;
    cover_image_uuid: string;
}

export interface SeriesWithEpisodes extends Series {
    episodes: Episode[];
    cover_image_url: string;
}

export interface Episode {
    belongs_to_series_id: number;
    sort_in_series: number;
    video_link: string;
}

export interface Result<T> {
    success: boolean;
    data: T | null;
}