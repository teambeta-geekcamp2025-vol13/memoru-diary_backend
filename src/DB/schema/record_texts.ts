import {text, pgTable,  uuid,  timestamp} from "drizzle-orm/pg-core";
import { life_records } from "./life_records.ts";

export const record_texts = pgTable('record_texts', {
   id: uuid('id').primaryKey().notNull(),
   life_records_id: uuid().references(() => life_records.id).notNull(),
   text: text().notNull(),
   created_at: timestamp().notNull().defaultNow(),


});