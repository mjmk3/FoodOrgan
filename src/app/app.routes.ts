import { Routes } from '@angular/router';
import {HomeComponent} from "./comps/page/home/home.component";
import {ContactComponent} from "./comps/page/contact/contact.component";
import {ShopComponent} from "./comps/page/shopping/shop/shop.component";
import {
  ProductSearchResaultComponent
} from "./comps/page/product/product-search-resault/product-search-resault.component";
import {ProductDetailsComponent} from "./comps/page/product/product-details/product-details.component";
import {CartComponent} from "./comps/page/shopping/cart/cart.component";
import {WishListComponent} from "./comps/page/shopping/wish-list/wish-list.component";
import {CheckoutComponent} from "./comps/page/shopping/checkout/checkout.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'product',
    children: [
      { path: 'shop', component: ShopComponent },
      { path: 'search', component: ProductSearchResaultComponent },
      { path: 'details/:productId', component: ProductDetailsComponent }
    ]
  },
  { path: 'shopping',
    children: [
      { path: 'cart', component: CartComponent },
      { path: 'wishlist', component: WishListComponent },
      { path: 'checkout', component: CheckoutComponent }
    ]
  },
  { path: 'contact', component: ContactComponent }
];
