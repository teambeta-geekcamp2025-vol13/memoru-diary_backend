import {boolean, pgTable,  text, timestamp, uuid,} from "drizzle-orm/pg-core";
import { users } from "./users.ts";
export const diaries = pgTable('diaries', {
    id: uuid().primaryKey().defaultRandom().notNull(),
    user_id: uuid().notNull().references(()=>users.id),
    title: text().notNull(),
    readed: boolean().notNull().default(false),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
});