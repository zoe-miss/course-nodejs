import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { EventsModule } from './events/events.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [EventsModule, ConfigModule.register({ folder: './config' })],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
