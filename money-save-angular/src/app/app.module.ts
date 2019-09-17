import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './Guest/home/home.component';
import { LogoComponent } from './Layouts/logo/logo.component';
import { LoginComponent } from './User/login/login.component';
import { DashboardComponent } from './User/dashboard/dashboard.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { ShopListComponent } from './User/Shops/shop-list/shop-list.component';
import { DateWiseHistoryComponent } from './User/Shops/date-wise-history/date-wise-history.component';

const routes:Routes = [
	{ path : '', component : HomeComponent },
	{ path : 'login', component : LoginComponent },
  { 
      path : 'dashboard', 
      component : DashboardComponent,
      children : [
        { path : 'date-wise-history', component : DateWiseHistoryComponent },
        { path : 'shops', component : ShopListComponent }
      ]},
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoComponent,
    DashboardComponent,
    NavbarComponent,
    ShopListComponent,
    DateWiseHistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
