import {Episode as EpisodeType, Result} from "../dto";
import {db} from "../neon";
import {Episode} from "~/server/models/episode";
import {and, eq} from "drizzle-orm";

export async function getEpisodeBySort(belongs: number, sort: number): Promise<Result<EpisodeType>> {
    const episode = await db.select()
        .from(Episode)
        .where(and(eq(Episode.belongs_to_series_id, belongs), eq(Episode.sort_in_series, sort)));
    if (episode.length === 0) {
        return {success: false, data: null};
    }
    return {success: true, data: episode[0]};
}