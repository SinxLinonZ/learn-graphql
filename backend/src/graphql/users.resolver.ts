import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@example.com',
  },
];

@Resolver('User')
export class UsersResolver {
  constructor() {}

  @Query('getUser')
  getUser(@Args('id') id: number) {
    return users.find((user) => user.id == id);
  }

  @Query('listUsers')
  listUsers() {
    return users;
  }

  @Mutation('createUser')
  createUser(@Args('name') name: string, @Args('email') email: string) {
    const newUser = {
      id: users.length + 1,
      name,
      email,
    };
    users.push(newUser);
    return newUser;
  }
}
