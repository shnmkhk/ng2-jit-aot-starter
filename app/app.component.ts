import { Component } from '@angular/core';
import { UserService } from './services/User.service';

@Component({
  selector: 'my-app',
  styles: [`
    
  `],
  template: `
    <div class="jumbotron text-left">
      <first-el></first-el>
      <second-el></second-el>
      <third-el></third-el>
      <button *ngIf="showClickButton" (click)="clickHandle()">Sign-in</button>
    </div>
  `
})
export class AppComponent {
  message = 'Hello World';
  showClickButton:boolean = true;
  constructor(private userService:UserService) {

  }
  clickHandle(){
    this.userService.handleSuccess();
    this.showClickButton = false;
  }
}