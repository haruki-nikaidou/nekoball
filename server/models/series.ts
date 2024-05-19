import {pgTable, serial, uuid, varchar} from 'drizzle-orm/pg-core';
import {relations} from "drizzle-orm";
import {Episode} from "./episode";

export const Series = pgTable('series', {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 255}).notNull(),
    cover_image_uuid: uuid('cover_image_uuid').notNull(),
})

export const SeriesRelation = relations(Series, ({many}) => {
    return {
        episode: many(Episode)
    }
})