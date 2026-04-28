import {
  Args,
  Resolver,
  Query,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query('user')
  async getUser(@Args('id') id: string) {
    return await this.prismaService.user.findUnique({
      where: { id: Number(id) },
    });
  }

  @Query('users')
  async listUsers() {
    return await this.prismaService.user.findMany();
  }

  @ResolveField('posts')
  async getUserPosts(@Args('id') userId: string) {
    return await this.prismaService.post.findMany({
      where: { authorId: Number(userId) },
    });
  }

  @ResolveField('emailDomain')
  getEmailDomain(@Parent() user: { email: string }) {
    return user.email.split('@')[1] ?? '';
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
