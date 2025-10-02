import {pgTable,  timestamp, unique, uuid, pgEnum} from "drizzle-orm/pg-core";
import { users } from "./users.ts";
export const follow_requestsEnum = pgEnum('status', ['permission', 'rejection', 'requesting']);
export const follow_requests = pgTable('follow_requests', {
    id: uuid().primaryKey().defaultRandom().notNull(),
    send_user_id: uuid().notNull().references(()=>users.id),
    receive_user_id: uuid().notNull().references(()=>users.id),
    allow: follow_requestsEnum().notNull().default('requesting'),
    updated_at: timestamp().notNull().defaultNow(),
    created_at: timestamp().notNull().defaultNow(),

},(table)=>({
   follow_account_unique:unique().on(table.send_user_id, table.receive_user_id)}));