import 'dotenv/config'
import {neon} from "@neondatabase/serverless";
import { drizzle } from 'drizzle-orm/neon-http';
import {Series} from "./models/series";
import {Episode} from "./models/episode";

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
export const db = drizzle(sql, {
    schema: {
        Series,
        Episode
    }
});