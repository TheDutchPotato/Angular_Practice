import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    ListComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    RouterModule.forRoot([
      { path:'', component: HomeComponent },
      { path:'todo', component: ListComponent}
    ])
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
