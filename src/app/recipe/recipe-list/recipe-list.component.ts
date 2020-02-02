import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe = [
    new Recipe('Test Recipe', 'this is just a Test decription', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuvfDcQEm0gA5La_hMANW8bNu2ln796HnRcvp9Ejzr0gPbiM-gRA&s')
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
