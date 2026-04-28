import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PostResolver],
})
export class PostModule {}
