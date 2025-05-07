import { getCartProductFromLS } from "./getCartProductFromLS";

export const fetchQuantityfromLs = (id,price)=>{
   let cartProducts = getCartProductFromLS();

   let existingProduct = cartProducts.find((curProd)=> curProd.id === id);
    let quantity = 1;
   if(existingProduct){
    quantity = existingProduct.quantity;
    price = Math.round(existingProduct.price);
   };


   return {quantity,price};
    
}