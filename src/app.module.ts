import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TipsModule } from './tips/tips.module';
import { UsersModule } from './users/users.module';
import { Tip } from './models/tip.entity';
import { User } from './models/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: 5432,
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DATABASE'),
        entities: [Tip, User],
        synchronize: true,
        ssl: {
          rejectUnauthorized: false, 
        },
      }),
      inject: [ConfigService],
    }),
    TipsModule,
    UsersModule,
  ],
})
export class AppModule {}
