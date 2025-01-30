import { Routes } from '@angular/router';
import { HomePageComponent } from '../Components/home-page/home-page.component';

export const routes: Routes = [
    {
        path:'',
        component:HomePageComponent,
        title:'Home'
    },
    {
        path: 'registration',
        loadChildren: () =>   
       import('../Components/auth/auth.module')
          .then(m => m.AuthModule)
     } 
];
