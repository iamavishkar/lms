import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { DataSource } from 'typeorm';
import { ModeEnum } from './common/enums/mode.enum';

async function bootstrap() {
  const port: string | number = process.env.PORT || 7001;
  const environment: string = process.env.MODE || ModeEnum.DEV;
  const app = await NestFactory.create(
    AppModule,
    environment === ModeEnum.PROD ? { logger: false } : undefined,
  );
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.setGlobalPrefix('api/v1');
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(port);
  const appUrl = await app.getUrl();

  console.log(`
    🚀 Application is running!
    ----------------------------------
    🌍 Environment  : ${environment}
    🚪 Port         : ${port}
    📡 Base URL     : ${appUrl}
    🔹 API Version  : /api/v1
    🕒 Started at   : ${new Date().toLocaleString()}
    ----------------------------------
    `);

  // 🔹 Log Database Connection
  const dataSource = app.get(DataSource);
  if (dataSource.isInitialized) {
    console.log('✅ Database connected successfully!');
  } else {
    console.error('❌ Database connection failed!');
  }
}
bootstrap();
