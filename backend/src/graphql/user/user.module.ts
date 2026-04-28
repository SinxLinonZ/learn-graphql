import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/PrismaService';

@Module({
  providers: [UserResolver, PrismaService],
})
export class UserModule {}
