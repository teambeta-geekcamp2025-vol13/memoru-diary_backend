import { integer, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { time } from "node:console";
export const users = pgTable('users', {
  id: uuid().primaryKey().defaultRandom().notNull(),
  account_id: text().unique().notNull(),
  //google_idあとで紐づける
  google_id: uuid().notNull(),
  name: text().notNull(),
  updated_at: timestamp().notNull().defaultNow(),
  created_at: timestamp().notNull().defaultNow(),


})