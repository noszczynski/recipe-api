const { default: dbConfig } = require('./src/config/database.config.ts');

module.exports = {
  ...dbConfig,
  entities: ['src/**/*.entity.ts'],
  seeds: ['src/database/seeders/seeds/**/*{.ts,.js}'],
  factories: ['src/database/seeders/factories/**/*{.ts,.js}'],
};
