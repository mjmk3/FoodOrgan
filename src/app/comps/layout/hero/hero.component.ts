import { Component } from '@angular/core';
import {ProductCategoryComponent} from "../../page/product/productCategory/productCategory.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ProductCategoryComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
