import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ProductComponent }  from './components/product/product.component';
import { ProductViewComponent } from "./components/product-view/product-view.component";
import { ServicesComponent } from "./components/services/services.component";
import { ContactComponent } from "./components/contact/contact.component";
import { LoginComponent } from "./components/login/login.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { RegisterComponent } from "./components/register/register.component";

const appRoutes : Routes = [
    { path: "", component: HomeComponent },    
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "products", component: ProductComponent },
    { path: "product/:id", component: ProductViewComponent },
    { path: "services", component: ServicesComponent },
    { path: "contact", component: ContactComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },  
    { path: '**', component: NotfoundComponent }    
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);