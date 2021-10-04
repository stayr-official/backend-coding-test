import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as models from 'src/domain/models';

@Module({
  imports: [TypeOrmModule.forFeature([models.User])],
  exports: [TypeOrmModule]
})
export class BlogModule {}