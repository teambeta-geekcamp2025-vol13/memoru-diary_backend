import { Hono } from 'hono';

const users = new Hono();
users.route('/users', users);

<<<<<<< HEAD
users.get('/', (c) => {
   return c.text("success deploy")});
=======
users.get('/', (c) =>  c.text("success deploy"));
>>>>>>> 8adf8dd (adjusted to deploy)

export default users;
