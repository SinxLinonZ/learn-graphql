import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { PrismaService } from 'src/PrismaService';

@Module({
  providers: [PostResolver, PrismaService],
})
export class PostModule {}
