import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent, LoginComponent, CalculatorComponent, FirstComponent, SecondComponent, ThirdComponent } from './index';
import { ArithmeticService, UserService } from './services/index';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule],
  declarations: [AppComponent, LoginComponent, CalculatorComponent, FirstComponent, SecondComponent, ThirdComponent],
  providers: [ArithmeticService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }