import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query('getPost')
  async getPost(@Args('id') id: string) {
    return await this.prismaService.post.findUnique({
      where: { id: Number(id) },
    });
  }

  @Query('listPosts')
  async listPosts() {
    return await this.prismaService.post.findMany();
  }

  @Mutation('createPost')
  async createPost(
    @Args('userId') userId: string,
    @Args('title') title: string,
    @Args('content') content: string,
  ) {
    const newPost = await this.prismaService.post.create({
      data: {
        title,
        content,
        authorId: Number(userId),
      },
    });
    return newPost;
  }
}
