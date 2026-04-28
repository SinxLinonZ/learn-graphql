import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { PrismaService } from 'src/PrismaService';

@Resolver('User')
export class UserResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query('getUser')
  async getUser(@Args('id') id: string) {
    return await this.prismaService.user.findUnique({
      where: { id: Number(id) },
    });
  }

  @Query('listUsers')
  async listUsers() {
    return await this.prismaService.user.findMany();
  }

  @Query('getUserPosts')
  async getUserPosts(@Args('userId') userId: string) {
    return await this.prismaService.post.findMany({
      where: { authorId: Number(userId) },
    });
  }

  @Query('getUserWithPosts')
  async getUserWithPosts(@Args('id') id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id: Number(id) },
    });
    if (!user) return null;
    const posts = await this.prismaService.post.findMany({
      where: { authorId: Number(id) },
    });
    return { ...user, posts };
  }

  @Mutation('createUser')
  async createUser(@Args('name') name: string, @Args('email') email: string) {
    const newUser = await this.prismaService.user.create({
      data: {
        name,
        email,
      },
    });
    return newUser;
  }
}
