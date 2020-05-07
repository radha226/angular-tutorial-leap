import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ReviewOrderComponent } from './review-order/review-order.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


@NgModule({
  declarations: [AddToCartComponent, CheckoutPageComponent, ReviewOrderComponent, MyOrdersComponent, ShoppingListComponent],
  imports: [
    CommonModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule { }
