import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function createDatabaseConfig(
  configService: ConfigService,
): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host: configService.get<string>('DB_HOST', '127.0.0.1'),
    port: Number(configService.get<string>('DB_PORT', '3306')),
    username: configService.get<string>('DB_USERNAME', 'root'),
    password: configService.get<string>('DB_PASSWORD', ''),
    database: configService.get<string>('DB_DATABASE', 'nest_backend'),
    charset: 'utf8mb4',
    timezone: configService.get<string>('DB_TIMEZONE', '+08:00'),
    autoLoadEntities: true,
    synchronize:
      configService.get<string>('DB_SYNCHRONIZE', 'false') === 'true',
    logging: configService.get<string>('DB_LOGGING', 'false') === 'true',
    retryAttempts: 3,
    retryDelay: 2000,
  };
}
