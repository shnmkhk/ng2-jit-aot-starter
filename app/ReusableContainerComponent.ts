import { Component } from "@angular/core";

@Component({
    'selector': 'reusable-app',
    'template': `
        <button (click)="showSignup = !showSignup">Toggle Signup</button>
        <signup-component *ngIf="showSignup"></signup-component>
        <br/>
        <hr/>
        <button (click)="showSignin = !showSignin">Toggle Signin</button>
        <signin-component *ngIf="showSignin"></signin-component>
    `
})
export class ReusableContainerComponent {
    showSignin:boolean = false;
    showSignup:boolean = false;
}