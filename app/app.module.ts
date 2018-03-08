import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent, LoginComponent, CalculatorComponent } from './index';
import { ArithmeticService } from './services/index';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, LoginComponent, CalculatorComponent],
  providers: [ArithmeticService],
  bootstrap: [LoginComponent, AppComponent, CalculatorComponent]
})
export class AppModule { }