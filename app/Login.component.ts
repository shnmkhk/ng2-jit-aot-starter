import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ArithmeticService } from './services/index';
@Component({
    selector: 'login-app',
    styles: [`
    
  `],
    template: `
    <div>
      Username: <input type="text" [(ngModel)]="uname" />
      Password: <input type="password" [(ngModel)]="password"/>
      <input type="button" value="Login" (click)="setUser()" />
      <!--<hr/>      
      <h1> First 1-way property {{inputUser}} </h1>
      <h1> Second 1-way property {{inputUser2}} </h1>-->

      <div *ngIf="messageReady">
        Login {{message}}
      </div>

    </div>
  `
})
export class LoginComponent {
    message = 'This is the sample message.';
    messageReady:boolean = false;
    uname: string;
    password: string;
    constructor(private arthmeticService:ArithmeticService) {
        console.log('[LoginComponent] ' + this.arthmeticService.rand);
    }
    /*
    inputUser: String = 'DEFAULT';
    inputUser2: string = "DEFAULT_TEXT_TWO";
    */
    public setUser() {
        if (this.uname === "admin" && this.password === "admin")
            this.message = "Success...";
        else
            this.message = "Failed...";
        this.messageReady = true;
    }  
}