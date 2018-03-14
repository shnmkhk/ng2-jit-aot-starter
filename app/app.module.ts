import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent, LoginComponent, CalculatorComponent, FirstComponent, SecondComponent, ThirdComponent } from './index';
import { ArithmeticService, UserService, SampleHttpService } from './services/index';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, HttpModule],
  declarations: [AppComponent, LoginComponent, CalculatorComponent, FirstComponent, SecondComponent, ThirdComponent],
  providers: [ArithmeticService, UserService, SampleHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }