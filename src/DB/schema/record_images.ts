import {text, integer, pgTable, primaryKey, uuid, varchar, timestamp } from "drizzle-orm/pg-core";
import { life_records } from "./life_records.ts";
export const record_images = pgTable('record_images', {
  id: uuid().primaryKey().defaultRandom().notNull(),
  life_record_id: uuid().references(() => life_records.id).notNull(),
  url: text().notNull(),
  created_at: timestamp().defaultNow().notNull(),


})