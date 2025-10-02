import {pgTable, serial, timestamp, uuid, varchar} from "drizzle-orm/pg-core";
import { diaries } from "./diaries.ts";
import { users } from "./users.ts";
export const likes = pgTable('likes', {
    id: uuid().primaryKey().defaultRandom().notNull(),
    diary_id: uuid().notNull().references(()=>diaries.id),
    user_id: uuid().notNull().references(()=>users.id),
    updated_at: timestamp().notNull().defaultNow(),
    created_at: timestamp().notNull().defaultNow(),

});