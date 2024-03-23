import { Component } from '@angular/core';
import {FeaturedComponent} from "../../layout/featured/featured.component";
import {HeroComponent} from "../../layout/hero/hero.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FeaturedComponent,
    HeroComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
