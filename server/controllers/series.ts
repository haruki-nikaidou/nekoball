import { db } from "../neon";
import {Result, Series as SeriesType, SeriesWithEpisodes} from "../dto";
import {Series} from "@/server/models/series";
import {eq} from "drizzle-orm";
import {Episode} from "@/server/models/episode";
import {getImageUrl} from "@/server/config";

export async function getSeriesList(): Promise<SeriesType[]> {
    return db.select().from(Series);
}

export async function getSeriesById(id: number): Promise<Result<SeriesWithEpisodes>> {
    const seriesAndEpisodes = await db.select()
        .from(Series)
        .where(eq(Series.id, id))
        .innerJoin(Episode, eq(Series.id, Episode.belongs_to_series_id));
    if (seriesAndEpisodes.length === 0) {
        return {success: false, data: null};
    }
    const series = seriesAndEpisodes[0].series;
    const episodes = seriesAndEpisodes.map(({episode}) => episode);
    const cover_image_url = getImageUrl(series.cover_image_uuid);
    return {success: true, data: { ...series, episodes, cover_image_url }};
}