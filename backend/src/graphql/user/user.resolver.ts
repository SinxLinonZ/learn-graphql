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

  @Mutation('createUser')
  createUser(@Args('name') name: string, @Args('email') email: string) {
    const newUser = this.dbService.createUser(name, email);
    return newUser;
  }
}
