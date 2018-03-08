import { Injectable } from "@angular/core";

@Injectable()
export class ArithmeticService {
    rand:number = Math.random();
    add(a:number, b:number):number {
        console.log('Random num: ' + this.rand);
        return a + b;
    }
}