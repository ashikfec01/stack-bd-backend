import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { NewsFeedModule } from './news-feed/news-feed.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, NewsFeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
