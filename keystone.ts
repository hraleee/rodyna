import { config, list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, password } from '@keystone-6/core/fields';
import { statelessSessions } from '@keystone-6/core/session';

// Definiamo una chiave segreta per le sessioni
const SESSION_SECRET = process.env.SESSION_SECRET || 'una-chiave-segreta-molto-lunga-e-sicura';

export default config({
  db: {
    provider: 'sqlite',
    url: process.env.DATABASE_URL ?? 'file:./keystone.db',
  },
  lists: {
    User: list({
      access: allowAll,
      fields: {
        name: text({ validation: { isRequired: true } }),
        email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
        password: password({ validation: { isRequired: true } }),
      },
    }),
  },
  // Configurazione delle sessioni
  session: statelessSessions({
    secret: SESSION_SECRET,
    maxAge: 60 * 60 * 24 * 30, // 30 giorni
  }),
  // Configurazione del server
  server: {
    port: parseInt(process.env.PORT || '3000'),
    cors: { origin: ['http://localhost:3000'], credentials: true },
  },
  // UI configurazione
  ui: {
    isAccessAllowed: () => true,
  },
});
