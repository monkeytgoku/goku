import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private socket: Socket) {}

  public joinChatRoom(username: string): void {
    this.socket.emit('user_join', username);
  }

  public sendMessage(message: any): void {
    this.socket.emit('send_message', message);
  }

  public getMessages = () => {
    const observable = new Observable((observer) => {
      this.socket.on('receive_message', (message: any) => {
        observer.next(message);
      });
    });
    return observable;
  }
}
