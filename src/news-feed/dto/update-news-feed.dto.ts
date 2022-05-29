import { PartialType } from '@nestjs/mapped-types';
import { CreateNewsFeedDto } from './create-news-feed.dto';

export class UpdateNewsFeedDto extends PartialType(CreateNewsFeedDto) {}
