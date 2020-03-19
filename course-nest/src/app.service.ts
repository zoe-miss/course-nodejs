import { Inject, Injectable } from '@nestjs/common';

import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  // 依赖注入
  @Inject()
  private readonly configService: ConfigService;

  getHello(): string {
    return this.configService.get('HELLO_MESSAGE');
  }
}
