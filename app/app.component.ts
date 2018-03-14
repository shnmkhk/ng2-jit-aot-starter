import { Component } from '@angular/core';
import { UserService, SampleHttpService } from './services/index';

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
      <button (click)="makeCall()">Hit SampleHTTPAPI</button>
    </div>
  `
})
export class AppComponent {
  message = 'Hello World';
  showClickButton:boolean = true;
  constructor(private userService:UserService, private sampleHttpService:SampleHttpService) {

  }
  clickHandle(){
    this.userService.handleSuccess();
    this.showClickButton = false;
  }

  makeCall() {
    this.sampleHttpService.getConfig();
  }
}