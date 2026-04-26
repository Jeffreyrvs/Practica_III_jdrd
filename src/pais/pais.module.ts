import { Module } from '@nestjs/common';
import { PaisService } from './pais.service';
import { PaisController } from './pais.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pais } from './entities/pais.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PaisController],
  providers: [PaisService],
  imports: [TypeOrmModule.forFeature([Pais]), AuthModule]
})
export class PaisModule {}
