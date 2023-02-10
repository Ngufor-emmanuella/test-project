import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'Outfit',
        author: 'Gucci',
        image: 'assets/images/yellow-dress.jpg',
        amount: 15000
      },

      {
        image: 'assets/images/black.jpg',
        name: 'Black dress',
        author: 'Versace',
        amount: 20000
      },

      {
        image: 'assets/images/suitwhite.jpg',
          name: 'white suit',
          author: 'Givenchi',
          amount: 25000
        },

        {
          image: 'assets/images/suit.jpg',
          name: 'Dark-red suit',
          author: 'Fenty',
          amount: 30000,
        },

        {
          image: 'assets/images/blue-dress.jpg',
          name: 'Blue dress',
          author: 'Louise-vuitton',
          amount: 35000
        },

        {
          image: 'assets/images/blue.jpg',
          name: 'Nude color dress',
          author: 'Normain',
          amount: 40000
        },

        {
          image: 'assets/images/rose.jpg',
          name: 'Nude color dress',
          author: 'Hermes',
          amount: 45000
        },

        {
          image: 'assets/images/green.jpg',
          name: 'green dress',
          author: 'Fenty',
          amount: 50000
        },

        {
          image: 'assets/images/glitter.jpg',
          name: 'gliter dress',
          author: 'Dior',
          amount: 30000,
        },

        {
          image: 'assets/images/orange.jpg',
          name: 'Orange dress',
          author: 'Versace',
          amount: 45000
        },

        {
          image: 'assets/images/white.jpg',
          name: 'White dress',
          author: 'Hermes',
          amount: 35000
        },

        {
          image: 'assets/images/brown.jpg',
          name: 'Brown dress',
          author: 'Normain',
          amount: 50000
        },

        {
          image: 'assets/images/yellow.jpg',
          name: 'Yellow dress',
          author: 'Givenchi',
          amount: 25000
        },

        {
          image: 'assets/images/brown-dress.jpg',
          name: 'Brown dress',
          author: 'Dior',
          amount: 50000
        },

        {
          image: 'assets/images/pink.jpg',
          name: 'Pink dress',
          author: 'versace',
          amount: 25000
        },
    ]
  }
}
