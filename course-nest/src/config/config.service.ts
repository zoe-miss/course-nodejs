import { Injectable, Inject, Optional } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { ConfigOptions, EnvConfig } from './interface';
import { CONFIG_OPTIONS } from './constants';
import Joi = require('@hapi/joi');

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject(CONFIG_OPTIONS) options: ConfigOptions) {
    const fileName = `${process.env.NODE_ENV || 'development'}.env`;
    const envFile = path.resolve(__dirname, '../../', options.folder, fileName);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  public get(key: string): string {
    return this.envConfig[key];
  }

  // 对于每个配置的类属性， 我们必须添加一个getter方法
  get isApiAuthEnabled(): boolean {
    return Boolean(this.envConfig.API_AUTH_ENABLED);
  }
}
