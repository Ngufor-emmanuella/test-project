import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, BooksModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}