import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewnewsComponent } from './viewnews/viewnews.component';
import { HttpClientModule } from '@angular/common/http'
const myRoute:Routes=[
  {
    path:"",
    component:ViewComponent
  },
  {
    path:"add",
    component:AddComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    NavbarComponent,
    ViewnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
