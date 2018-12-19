import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ServicesComponent } from './components/services/services.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/partial/alert.component';

import { routing }  from './app.routing';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { HeaderComponent } from './components/partial/header/header.component';
import { FooterComponent } from './components/partial/footer/footer.component';
import { BannerComponent } from './components/partial/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductComponent,
    ServicesComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ProductViewComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule,    
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
