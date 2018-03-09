import { Injectable, EventEmitter } from "@angular/core";
import { User } from '../observables/User'
@Injectable()
export class UserService {
    userObj:any;
    authenticationEmitter:EventEmitter<User>;
    constructor(){
        this.authenticationEmitter = new EventEmitter<User>();
    }
    public emit(user:User) {
        this.authenticationEmitter.emit(user);
    }
    public handleSuccess() {
        let user:User = new User();
        user.id = 10;
        user.name = 'Shanmukha';
        user.lastlogin = 'Yesterday';
        this.emit(user);
    }
}