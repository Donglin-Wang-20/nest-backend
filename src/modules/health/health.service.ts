import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { HealthResponseDto } from './dto/health-response.dto';

@Injectable()
export class HealthService {
  constructor(private readonly dataSource: DataSource) {}

  async check(): Promise<HealthResponseDto> {
    const databaseStart = Date.now();

    try {
      await this.dataSource.query('SELECT 1');
    } catch {
      throw new ServiceUnavailableException('Database connection is unavailable');
    }

    return {
      status: 'ok',
      service: 'nest-backend',
      database: 'up',
      databaseLatencyMs: Date.now() - databaseStart,
      timestamp: new Date().toISOString(),
      uptime: Number(process.uptime().toFixed(2)),
      content: '芜湖，起飞！',
    };
  }
}
