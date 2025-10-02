import { Hono } from 'hono';
import users from './routes/users.ts'
const app = new Hono()


app.route('/users',users )

Deno.serve({port:3000},app.fetch)
