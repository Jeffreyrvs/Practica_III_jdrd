import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true
  }));
  const config = new DocumentBuilder()
    .setTitle('CRUD pais')
    .setDescription('API rest para un CRUD aplicando tecnicas de seguridad y autenticacion')
    .setVersion('1.0')
    .addServer('https://practica-iii-jdrd.onrender.com')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
