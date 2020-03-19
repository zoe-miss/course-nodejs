import { IoAdapter } from '@nestjs/platform-socket.io';
import * as SocketIORedis from 'socket.io-redis';

export class RedisIoAdapter extends IoAdapter {
  private readonly redisAdapter = SocketIORedis({ host: 'localhost', port: 6379 });
  createIOServer(port: number, options?: any): any {
    const server = super.createIOServer(port, options);
    server.adapter(this.redisAdapter);
    return server;
  }
}
