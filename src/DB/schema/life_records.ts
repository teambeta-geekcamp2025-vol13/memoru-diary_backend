import {pgTable, serial, timestamp, uuid, varchar} from "drizzle-orm/pg-core";
import { users } from "./users.ts";
import { diaries } from "./diaries.ts";
export const life_records = pgTable('life_records', {
   id: uuid().primaryKey().defaultRandom().notNull(),
   dairy_id: uuid().notNull().references(()=>diaries.id),
   user_id: uuid().notNull().references(()=>users.id),
   record_data: timestamp().notNull().defaultNow(),

});