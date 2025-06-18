import {createAuth} from "@keystone-6/auth"
import { statelessSessions } from '@keystone-6/core/session';

const SESSION_SECRET = process.env.SESSION_SECRET || 'una-chiave-segreta-molto-lunga-e-sicura';

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  sessionData: 'name',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

const session = statelessSessions({
  secret: SESSION_SECRET,
  maxAge: 60 * 60 * 24 * 30,
});

export { withAuth, session };