import { SubscribeMessage, WebSocketGateway, MessageBody, WsResponse } from '@nestjs/websockets';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@WebSocketGateway()
export class EventsGateway {
  @SubscribeMessage('events')
  handleMessage(@MessageBody() data: any): Observable<WsResponse<number>> {
    const event = 'events';
    const response = [1, 2, 3];
    return from(response).pipe(map(data => ({event, data})));
  }
}
