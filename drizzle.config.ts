const config = {
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  driver: 'better-sqlite',
  dbCredentials: {
    url: 'file:sqlite.db',
  },
};

export default config;
