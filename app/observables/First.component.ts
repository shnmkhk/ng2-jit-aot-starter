import { Component } from "@angular/core";
import { User } from './User';
import { UserService } from "../services/User.service";
@Component({
    selector: 'first-el',
    template: `
        <div *ngIf="user">Welcome, {{user?.name}}</div>    
        <div [hidden]="user">Hello. Please sign-in</div>
    `
})
export class FirstComponent {
    private user:User;   
    constructor(userService:UserService) {
        let _this = this;
        userService.authenticationEmitter.subscribe(function(data:User){
            _this.user = data;
        });
    }
}

