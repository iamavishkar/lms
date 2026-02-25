import { Module } from "@nestjs/common";
import { APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
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
} from "./modules";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as "mysql",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
      timezone: "Z",
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
