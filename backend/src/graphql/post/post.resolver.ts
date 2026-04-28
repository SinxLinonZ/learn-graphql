import {
  Args,
  Resolver,
  Query,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query('post')
  async getPost(@Args('id') id: string) {
    return await this.prismaService.post.findUnique({
      where: { id: Number(id) },
    });
  }

  @Query('posts')
  async listPosts() {
    return await this.prismaService.post.findMany();
  }

  @ResolveField('author')
  async getAuthor(@Parent() post: { authorId: number }) {
    return await this.prismaService.user.findUnique({
      where: { id: post.authorId },
    });
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
