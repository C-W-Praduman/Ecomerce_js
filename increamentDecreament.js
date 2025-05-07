import { getCartProductFromLS } from "./getCartProductFromLS";

export const increamentDecreament = (event,id,stock,price)=>{
     //? get the card on which the user is clicking it is set in the homeProductCard,js file line num: 18||
     const currentCardElement = document.querySelector(`#card${id}`);
   
     //? getn the product quatity 
     const productQuantity = currentCardElement.querySelector(".productQuantity");
     const productprice = currentCardElement.querySelector(".productPrice");

     let quantity = 1;
     let localStoragePrice = 0;

     let localCartProducts = getCartProductFromLS();


     let existingProduct = localCartProducts.find((curProd)=>{
        return curProd.id === id 
     })

     if(existingProduct){
        quantity = existingProduct.quantity;
        localStoragePrice = existingProduct.price;
     }else{
        localStoragePrice = price;
        price = price;
     }

     if(event.target.className === "cartIncrement"){
        //? when quatity of the product is less than stock then increase if equal to stock size the the stock size is the maximum quantity  
        if(quantity < stock){
            quantity++
        }else if(quantity === stock){ 
            quantity = stock; 
            localStoragePrice = price * stock           
        }
    }

    if(event.target.className === "cartDecrement"){
        //? if the quantity is greater than 1 only then decrease the value ;
        if(quantity > 1){
            quantity--;
        }
    };

    localStoragePrice = price * quantity;

    let updatedCart = { id, quantity, price: localStoragePrice };

    updatedCart = localCartProducts.map((curelem) => {
        return curelem.id === id ? updatedCart : curelem;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    
}