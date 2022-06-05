import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { NewsFeedModule } from './news-feed/news-feed.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AuthModule, NewsFeedModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
