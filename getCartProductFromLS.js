import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS =()=>{
    let cartProducts =localStorage.getItem("cartProductLS");
    if(!cartProducts) return [];
    cartProducts = JSON.parse(cartProducts)
      //? update the card button value 
      updateCartValue(cartProducts);
    return cartProducts;
}

