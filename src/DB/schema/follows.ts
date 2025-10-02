import {pgTable, serial, unique, uuid, varchar} from "drizzle-orm/pg-core";
import { users } from "./users.ts";
export const follows = pgTable('follows', {
    id: uuid().primaryKey().defaultRandom().notNull(),
    follower_id: uuid().notNull().references(()=>users.id),
    following_id: uuid().notNull().references(()=>users.id),
},(table)=>({
   follow_account_unique:unique().on(table.follower_id, table.following_id)}));