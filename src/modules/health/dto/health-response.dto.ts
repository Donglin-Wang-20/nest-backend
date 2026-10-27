import { ApiProperty } from '@nestjs/swagger';

export class HealthResponseDto {
  @ApiProperty({ description: '健康状态', example: 'ok' })
  status!: string;

  @ApiProperty({ description: '服务名称', example: 'nest-backend' })
  service!: string;

  @ApiProperty({
    description: 'MySQL 数据库连接状态',
    enum: ['up', 'down'],
    example: 'up',
  })
  database!: 'up' | 'down';

  @ApiProperty({ description: '数据库查询耗时（毫秒）', example: 3 })
  databaseLatencyMs!: number;

  @ApiProperty({
    description: '健康检查时间（ISO 8601）',
    example: '2026-10-27T14:00:00.000Z',
  })
  timestamp!: string;

  @ApiProperty({ description: '服务已运行时长（秒）', example: 12.34 })
  uptime!: number;

  @ApiProperty({ description: '自定义内容', example: '芜湖，起飞！' })
  content!: string;
}
