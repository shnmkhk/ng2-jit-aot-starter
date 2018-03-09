import { Component } from "@angular/core";
import { User } from './User';
import { UserService } from "../services/User.service";
@Component({
    selector: 'second-el',
    template: `
        <button *ngIf="user" (click)="signOut(user?.id)">Signout</button>    
    `
})
export class SecondComponent {
    private user:User;   
    constructor(userService:UserService) {
        let _this = this;
        userService.authenticationEmitter.subscribe(function(data:User){
            _this.user = data;
        });
    } 
    public signOut(id:any) {
        console.log('User with id: ' + id + ' is being signed out');
    }
}

