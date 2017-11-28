import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
