import { Component, OnInit } from '@angular/core';

interface Dresses {
  name: string,
  author: string,
  image: string,
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  dress: Dresses[] = [
    {
      name: 'skirt and blouse',
      author: 'Gucci',
      image: 'assets/images/yellow-dress.jpg',
    },

    {
      image: 'assets/images/black.jpg',
      name: 'Black dress',
      author: 'Versace'
    },

    {
      image: 'assets/images/suitwhite.jpg',
      name: 'white suit',
      author: 'Givenchi',
    },

    {
      image: 'assets/images/suit.jpg',
      name: 'Dark-red suit',
      author: 'Fenty',
    },

    {
      image: 'assets/images/blue-dress.jpg',
      name: 'Blue dress',
      author: 'Louise-vuitton',
    },

    {
      image: 'assets/images/blue.jpg',
      name: 'Nude color dress',
      author: 'Normain',    
    },
    
    {
      image: 'assets/images/rose.jpg',
      name: 'Nude color dress',
      author: 'Dolce & Gabana',    
    },

    {
      image: 'assets/images/green.jpg',
      name: 'green dress',
      author: 'Fenty',    
    },

    {
      image: 'assets/images/glitter.jpg',
      name: 'gliter dress',
      author: 'Dior',    
    },

    {
      image: 'assets/images/orange.jpg',
      name: 'Orange dress',
      author: 'Versace',    
    },

    {
      image: 'assets/images/white.jpg',
      name: 'White dress',
      author: 'Hermes',    
    },

    {
      image: 'assets/images/brown.jpg',
      name: 'Browndress',
      author: 'Normain',    
    },

    {
      image: 'assets/images/yellow.jpg',
      name: 'Yellow dress',
      author: 'Givenchi',    
    },

    {
      image: 'assets/images/brown-dress.jpg',
      name: 'Brown dress',
      author: 'Dior',    
    },

    {
      image: 'assets/images/pink.jpg',
      name: 'Pink dress',
      author: 'versace',    
    },
  ]

  isShowing: boolean = true;
  
  constructor() {}

  ngOnInit(): void {}

  

}
