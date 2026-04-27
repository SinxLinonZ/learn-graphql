import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { DbService } from 'src/db/db.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly dbService: DbService) {}

  @Query('getUser')
  getUser(@Args('id') id: string) {
    return this.dbService.getUserById(Number(id));
  }

  @Query('listUsers')
  listUsers() {
    return this.dbService.getUsers();
  }

  @Query('getUserPosts')
  getUserPosts(@Args('userId') userId: string) {
    return this.dbService.getPostsByUserId(Number(userId));
  }

  @Query('getUserWithPosts')
  getUserWithPosts(@Args('id') id: string) {
    const user = this.dbService.getUserById(Number(id));
    if (!user) return null;
    const posts = this.dbService.getPostsByUserId(Number(id));
    return { ...user, posts };
  }

  @Mutation('createUser')
  createUser(@Args('name') name: string, @Args('email') email: string) {
    const newUser = this.dbService.createUser(name, email);
    return newUser;
  }
}
