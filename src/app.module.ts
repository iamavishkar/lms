import { Module } from "@nestjs/common";
import { APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";
import { ThrottlerModule, ThrottlerGuard } from "@nestjs/throttler";
import { ClassSerializerInterceptor } from "@nestjs/common";
import { JwtAuthGuard } from "./common/guards/jwt-auth.guard";
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
} from "./module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        host: configService.get("DATABASE_HOST", "localhost"),
        port: +configService.get("DATABASE_PORT", 3306),
        username: configService.get("DATABASE_USER", "root"),
        password: configService.get("DATABASE_PASSWORD", "password"),
        database: configService.get("DATABASE_NAME", "lms_db"),
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ThrottlerModule.forRoot([
      {
        ttl: parseInt(process.env.THROTTLE_TTL || "60000"),
        limit: parseInt(process.env.THROTTLE_LIMIT || "10"),
      },
    ]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "6d" },
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
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
