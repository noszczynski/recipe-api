import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

const env = process.env.NODE_ENV || 'development';
const dotenv_path = path.resolve(process.cwd(), `.env.${env}`);
const result = dotenv.config({ path: dotenv_path });

if (result.error) {
  /* do nothing */
}

export class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: configService.get<string>('DB_HOST'),
      port: configService.get<number>('DB_PORT'),
      username: configService.get<string>('DB_USER'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_NAME'),
      autoLoadEntities: true,
      synchronize: false,
      migrationsRun: false,
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/database/migrations/**/*{.ts,.js}'],
    };
  }
}

export default TypeOrmConfig.getOrmConfig(new ConfigService());

export const databaseConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) =>
    TypeOrmConfig.getOrmConfig(configService),
  inject: [ConfigService],
};

export const dataSource = new DataSource(
  TypeOrmConfig.getOrmConfig(new ConfigService()) as DataSourceOptions,
);
