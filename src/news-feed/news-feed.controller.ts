import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNewsFeedDto } from './dto/create-news-feed.dto';
import { UpdateNewsFeedDto } from './dto/update-news-feed.dto';
import { NewsFeedService } from './news-feed.service';

@Controller('news-feed')
export class NewsFeedController {
  constructor(private readonly newsFeedService: NewsFeedService) { }

  @Post()
  async create(@Body() createNewsFeedDto: CreateNewsFeedDto) {
    return await this.newsFeedService.create(createNewsFeedDto);
  }

  @Get()
  async findAll() {
    return await this.newsFeedService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.newsFeedService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateNewsFeedDto: UpdateNewsFeedDto) {
    return await this.newsFeedService.update(+id, updateNewsFeedDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.newsFeedService.remove(+id);
  }
}
