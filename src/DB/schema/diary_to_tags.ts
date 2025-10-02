import {pgTable, serial, uuid, varchar} from "drizzle-orm/pg-core";
import { diaries } from "./diaries.ts";
import { tags } from "./tags.ts";
export const diary_to_tags = pgTable('diary_to_tags', {
    id: uuid().primaryKey().defaultRandom().notNull(),
    diary_id: uuid().notNull().references(()=>diaries.id),
    tag_id: uuid().notNull().references(()=>tags.id),
});