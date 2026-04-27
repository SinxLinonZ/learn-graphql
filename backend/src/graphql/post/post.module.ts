import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { PostResolver } from './post.resolver';

@Module({
  imports: [DbModule],
  providers: [PostResolver],
})
export class PostModule {}
