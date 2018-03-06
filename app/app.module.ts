import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent, LoginComponent } from './index';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, LoginComponent],
  bootstrap: [LoginComponent]
})
export class AppModule { }