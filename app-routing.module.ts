import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SigninComponent } from './signin/signin.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { CategoriesComponent } from './categories/categories.component';
export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
    {
        path: 'categories',
        // component: CategoriesComponent,
        children:[
          {
            path: 'product-details',
            component: ProductDetailsComponent,
          },
          {
            path: 'add-products',
            component: AddProductsComponent,
          },
          {
            path: 'edit-products',
            component: EditProductsComponent,
          },    
        ]
      },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: SigninComponent,
      },
      {
        path: 'login',
        component: SigninComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'request-password',
        component: RequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
