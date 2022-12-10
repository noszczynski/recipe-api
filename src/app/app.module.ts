import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RecipeModule } from '../recipe/recipe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from '../config/db.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RecipeModule,
    UserModule,
    TypeOrmModule.forRootAsync(databaseConfig),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
