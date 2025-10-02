import { Hono } from 'hono';

const users = new Hono();
users.route('/users', users);

users.get('/', (c) => {
   return c.text("success deploy")});

export default users;
