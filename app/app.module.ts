import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent, LoginComponent, CalculatorComponent, FirstComponent, SecondComponent, ThirdComponent, ReusableContainerComponent } from './index';
import { ArithmeticService, UserService, SampleHttpService } from './services/index';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HeaderComponent, FooterComponent, SigninComponent, SignupComponent} from './nestedcomponents/index';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, HttpModule],
  declarations: [AppComponent, LoginComponent, CalculatorComponent, 
    FirstComponent, SecondComponent, ThirdComponent, HeaderComponent, FooterComponent, 
    SigninComponent, SignupComponent, ReusableContainerComponent],
  providers: [ArithmeticService, UserService, SampleHttpService],
  bootstrap: [ReusableContainerComponent]
})
export class AppModule { }