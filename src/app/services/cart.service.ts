import { Injectable } from '@angular/core';
import { CartItem } from '../modules/cartItem';
import { CartItems } from '../modules/cartItems';
import { Product } from '../modules/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.productId===product.productId);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity =1;
      CartItems.push(cartItem)
    }
  }

  removeFromCart(product:Product){
    let item:CartItem = CartItems.find(c=>c.product.productId===product.productId);
    {CartItems.splice(CartItems.indexOf(item),1)}
    
  }

  list():CartItem[]{
    return CartItems;
  }
}