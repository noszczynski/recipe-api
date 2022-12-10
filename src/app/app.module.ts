import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RecipeModule } from '../recipe/recipe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from '../config/database.config';
import { envValidationSchema } from '../config/envValidation.config';

@Module({
  imports: [
    RecipeModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      validationSchema: envValidationSchema,
    }),
    TypeOrmModule.forRootAsync(databaseConfig),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
