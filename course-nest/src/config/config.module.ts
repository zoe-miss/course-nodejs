import { Module, DynamicModule, Global } from '@nestjs/common';
import { ConfigService } from './config.service';
import {ConfigOptions} from './interface'
import { CONFIG_OPTIONS } from './constants';
/**
 * @author zoe
 * @description 动态module
 */
@Module({})
export class ConfigModule {
  static register(options: ConfigOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        { 
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService]
    }
  }
}
