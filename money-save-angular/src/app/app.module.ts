import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './Guest/home/home.component';
import { LogoComponent } from './Layouts/logo/logo.component';
import { LoginComponent } from './User/login/login.component';
import { DashboardComponent } from './User/dashboard/dashboard.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { ShopListComponent } from './User/Shops/shop-list/shop-list.component';

const routes:Routes = [
	{ path : '', component : HomeComponent },
	{ path : 'login', component : LoginComponent },
  { path : 'dashboard', component : DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoComponent,
    DashboardComponent,
    NavbarComponent,
    ShopListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
