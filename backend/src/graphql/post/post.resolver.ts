import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { DbService } from 'src/db/db.service';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly dbService: DbService) {}

  @Query('getPost')
  getPost(@Args('id') id: string) {
    return this.dbService.getPostById(Number(id));
  }

  @Query('listPosts')
  listPosts() {
    return this.dbService.getPosts();
  }

  @Mutation('createPost')
  createPost(
    @Args('userId') userId: string,
    @Args('title') title: string,
    @Args('content') content: string,
  ) {
    const newPost = this.dbService.createPost(Number(userId), title, content);
    return newPost;
  }
}
