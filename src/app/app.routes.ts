import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {
        path:"inicio",
        component: InicioComponent
    },

    {
        path:"contacto",
        component: ContactoComponent
    },

    {
        path:"registro",
        component: RegistroComponent
    },

    {
        path:"login",
        component: LoginComponent
    },

    {
        path:"",
        redirectTo:"/inicio",
        pathMatch:"full"
    }
];
