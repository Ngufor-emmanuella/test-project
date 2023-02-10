import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { BooksComponent } from  './books/books.component';
// import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: '', component: BooksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
