import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('app')
@Controller()
export class AppController {
  @Get()
  @ApiOperation({ summary: 'Get the root endpoint' })
  @ApiResponse({ status: 200, description: 'Returns a welcome message' })
  getHello(): string {
    return 'Welcome to the NestJS API!';
  }

  @Get('health')
  @ApiOperation({ summary: 'Check the health of the API' })
  @ApiResponse({ status: 200, description: 'Health check successful' })
  getHealth(): string {
    return 'API is up and running!';
  }
}
