import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AuthModule,
  UserModule,
  RoleModule,
  StudentModule,
  TeacherModule,
  ParentModule,
  ClassModule,
  SubjectModule,
  AttendanceModule,
  ExamModule,
  ResultModule,
  FileUploadModule,
  DashboardModule,
} from './module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST', 'localhost'),
        port: +configService.get('DATABASE_PORT', 3306),
        username: configService.get('DATABASE_USER', 'root'),
        password: configService.get('DATABASE_PASSWORD', 'password'),
        database: configService.get('DATABASE_NAME', 'lms_db'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    RoleModule,
    StudentModule,
    TeacherModule,
    ParentModule,
    ClassModule,
    SubjectModule,
    AttendanceModule,
    ExamModule,
    ResultModule,
    FileUploadModule,
    DashboardModule,
  ],
})
export class AppModule {}
