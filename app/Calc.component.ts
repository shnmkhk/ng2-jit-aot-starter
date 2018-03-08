import { Component } from '@angular/core';
import { ArithmeticService } from './services/index'
@Component({
  selector: 'calc-app',
  styles: [`
    
  `],
  template: `
    A:<br/>
    <input type="text" value="" [(ngModel)]="aData"/>
    B:<br/>
    <input type="text" value="" [(ngModel)]="bData"/>
    <br/>
    <button (click)="add()">Add A and B</button>
    <br/>
    Result is: <b>{{result}}</b>
  `
})
export class CalculatorComponent {
  aData:string;
  bData:string;
  result:number;
  constructor(private arthmeticService:ArithmeticService){
   console.log('[INFO] In CalculatorComponent ');   
   console.log('[CalculatorComponent] ' + this.arthmeticService.rand);
  }
  add() {
      
    this.result = this.arthmeticService.add(Number.parseInt(this.aData), Number.parseInt(this.bData));
  }
}