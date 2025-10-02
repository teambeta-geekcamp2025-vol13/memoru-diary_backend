import { foreignKey, integer, pgTable, primaryKey, uuid, varchar } from "drizzle-orm/pg-core";
export const users = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  life_record_id: uuid(foreignKey("id")),

})