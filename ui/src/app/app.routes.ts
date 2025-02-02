import { Routes } from '@angular/router';
import { HomePageComponent } from '../Components/home-page/home-page.component';
import { MenuComponent } from '../Components/menu/menu.component';

export const routes: Routes = [
    {
        path:'',
        component:HomePageComponent,
        title:'Home'
    },
    {
        path:'menu',
        component:MenuComponent,
        title:'Menu'
    },
    {
        path: 'registration',
        loadChildren: () =>   
       import('../Components/auth/auth.module')
          .then(m => m.AuthModule)
     } 
];
