import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { Routes, RouterModule} from '@angular/router';


const appRoutes:Routes=[
{path:'',component:AdduserComponent},
{path:'viewall',component:ViewuserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdduserComponent,
    ViewuserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
