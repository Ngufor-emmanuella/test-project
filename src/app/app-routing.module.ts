import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { BooksComponent } from  './books/books.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
