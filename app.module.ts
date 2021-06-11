import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesModule } from "./categories/categories.module";
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { AuthComponent } from './auth/auth.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TestComponent } from './test/test.component';
import { SigninComponent } from './signin/signin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,NbAlertModule } from '@nebular/theme';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbCardModule, NbIconModule, NbTreeGridModule,
    NbInputModule,
    CategoriesModule
  ],
  declarations: [AppComponent, RegisterComponent, LogoutComponent, RequestPasswordComponent, AuthComponent, ResetPasswordComponent, TestComponent, SigninComponent, ProductsComponent, ProductDetailsComponent, AddProductsComponent, EditProductsComponent],
  bootstrap: [AppComponent],
  exports:[FormsModule, ReactiveFormsModule],
})
export class AppModule {
}

