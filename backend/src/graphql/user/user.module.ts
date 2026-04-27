import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  providers: [UserResolver],
})
export class UserModule {}
