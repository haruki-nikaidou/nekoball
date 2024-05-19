import {index, pgTable, serial, smallint, text} from "drizzle-orm/pg-core";
import {Series} from "./series";
import {relations} from "drizzle-orm";

export const Episode = pgTable('episode', {
    id: serial('id').primaryKey(),
    belongs_to_series_id: serial('belongs_to_series_id').notNull().references(()=> Series.id),
    sort_in_series: smallint('sort_in_series').notNull(),
    video_link: text('video_link').notNull(),
}, (episode) => {
    return {
        belongs_index: index('belongs_index').on(episode.belongs_to_series_id)
    }
})

export const EpisodeRelation = relations(Episode, ({one}) => {
    return {
        series: one(Series)
    }
})