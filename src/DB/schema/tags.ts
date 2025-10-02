import {pgTable,  uuid, text, timestamp} from "drizzle-orm/pg-core";
import { users } from "./users.ts";
export const tags = pgTable('tags', {
    id :uuid().primaryKey().defaultRandom().notNull(),
    name: text().notNull().unique(),
    created_at: timestamp().notNull().defaultNow(),
    user_id: uuid().notNull().references(()=>users.id),
});