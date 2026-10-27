import { Controller, Get } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HealthResponseDto } from './dto/health-response.dto';
import { HealthService } from './health.service';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @ApiOperation({ summary: '健康检查（包含 MySQL 连接状态）' })
  @ApiOkResponse({ description: '服务和数据库均正常', type: HealthResponseDto })
  @ApiResponse({ status: 503, description: '数据库连接不可用' })
  check(): Promise<HealthResponseDto> {
    return this.healthService.check();
  }
}
