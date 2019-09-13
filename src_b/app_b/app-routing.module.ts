import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { SearchDasboardComponent } from './search-dasboard/search-dasboard.component';
import { AccessFormComponent } from './access-form/access-form.component';
import { DataProductComponent } from './data-product/data-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'search',
        component: SearchDasboardComponent
      },
      {
        path: 'accessForm',
        component: AccessFormComponent
      },
      {
        path: 'dataProduct',
        component: DataProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
