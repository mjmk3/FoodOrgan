import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./comps/layout/footer/footer.component";
import {BlogComponent} from "./comps/layout/blog/blog.component";
import {CategoryComponent} from "./comps/layout/category/category.component";
import {HeaderComponent} from "./comps/layout/header/header.component";
import {HeroComponent} from "./comps/layout/hero/hero.component";
import {BurgerComponent} from "./comps/layout/burger/burger.component";
import {FeaturedComponent} from "./comps/layout/featured/featured.component";
import {BannerComponent} from "./comps/layout/banner/banner.component";
import {LatestProductComponent} from "./comps/layout/latest-product/latest-product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, BlogComponent, CategoryComponent, HeaderComponent, HeroComponent, BurgerComponent, FeaturedComponent, BannerComponent, LatestProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FoodOrgan';
}
