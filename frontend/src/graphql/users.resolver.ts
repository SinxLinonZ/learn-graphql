import { Args, Resolver, Query } from '@nestjs/graphql';

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
    return users.find((user) => user.id === id);
  }

  @Query('listUsers')
  listUsers() {
    return users;
  }
}
