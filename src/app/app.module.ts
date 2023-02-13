import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { CommonComponentComponent } from './common-component/common-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponentComponent,
    DisplayComponentComponent,
    CommonComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
