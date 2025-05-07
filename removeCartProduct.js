import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";

export const removeCartProduct = (id)=>{

    let cartProducts = getCartProductFromLS();

    cartProducts = cartProducts.filter((curProd)=>{
        return curProd.id != id;
    })
  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));
    
  let removeItem = document.getElementById(`card${id}`);

  if(removeItem){
    removeItem.remove();

  }
 updateCartValue()
}