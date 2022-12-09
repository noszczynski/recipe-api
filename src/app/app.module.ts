import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RecipeModule } from '../recipe/recipe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    RecipeModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/recipe-api.sqlite3',
      autoLoadEntities: true,
      synchronize: true, // not for prod, use migrations
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
