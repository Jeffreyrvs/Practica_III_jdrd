import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaisModule } from './pais/pais.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PaisModule,
    TypeOrmModule.forRoot({ // Configuracion de la base de datos en la nube
      type: 'mysql',
      host: 'practica3-xxjeffrey2006xx-973d.g.aivencloud.com',
      port: 28168,
      username: 'avnadmin',
      password: 'AVNS_ytMsM7uF5Lk4uYQGfi_',
      database: 'defaultdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
