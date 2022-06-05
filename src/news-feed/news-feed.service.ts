import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNewsFeedDto } from './dto/create-news-feed.dto';

@Injectable()
export class NewsFeedService {
  constructor(private prismaServce: PrismaService) { }
  async create(data: Prisma.PostCreateInput): Promise<CreateNewsFeedDto> {
    return await this.prismaServce.post.create({ data });
  }

  async findAll() {
    return await this.prismaServce.post.findMany();
  }

  async findOne(id: number) {
    return await this.prismaServce.post.findFirst({ where: { id: id } });
  }

  async update(id: number, data: Prisma.PostUpdateInput) {
    return await this.prismaServce.post.update({ data, where: { id: id } });
  }

  async remove(id: number) {
    return await this.prismaServce.post.delete({ where: { id: id } });
  }
}
