import { Component } from "@angular/core";
import { User } from './User';
import { UserService } from "../services/User.service";
@Component({
    selector: 'third-el',
    template: `
        <div *ngIf="user">Last login: {{user.lastlogin}}</div>
    `
})
export class ThirdComponent {
    private user:User;   
    constructor(userService:UserService) {
        let _this = this;
        userService.authenticationEmitter.subscribe(function(data:User){
            _this.user = data;
        });
    }  
}

