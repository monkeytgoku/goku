import { Component, OnInit } from '@angular/core';

import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  newMessage!: any;
  messages: any[] = [];
  userWithMessages: any[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.joinChatRoom();
    this.getMessages();
  }

  sendMessage(): void {
    if (!this.newMessage) {
      return;
    }
    this.chatService.sendMessage(this.newMessage);
    this.userWithMessages.push({
      username: 'me',
      message: this.newMessage,
      isMe: true,
    });
    this.newMessage = '';
  }

  like(): void {
    this.chatService.sendMessage('mat-icon:thumb_up_alt');
    this.userWithMessages.push({
      username: 'me',
      message: 'mat-icon:thumb_up_alt',
      isMe: true,
    });
  }

  joinChatRoom(): void {
    this.chatService.joinChatRoom('user' +  Math.random());
  }

  getMessages(): void {
    this.chatService
      .getMessages()
      .subscribe((res: any) => {
        console.log(res);
        this.messages.push(res.message);
        this.userWithMessages.push(res);
      });
  }

}
