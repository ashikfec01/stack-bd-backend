import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewsFeedController } from './news-feed.controller';
import { NewsFeedService } from './news-feed.service';

@Module({
  controllers: [NewsFeedController],
  providers: [NewsFeedService, PrismaService]
})
export class NewsFeedModule { }
