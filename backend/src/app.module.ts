import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './graphql/user/user.module';
import { DbModule } from './db/db.module';
import { PostModule } from './graphql/post/post.module';

@Module({
  imports: [
    HelloModule,
    UserModule,
    PostModule,
    DbModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
