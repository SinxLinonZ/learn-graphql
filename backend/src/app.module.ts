import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './graphql/user/user.module';
import { PostModule } from './graphql/post/post.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HelloModule,
    UserModule,
    PostModule,
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
