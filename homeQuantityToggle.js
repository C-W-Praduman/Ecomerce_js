
//?  This function is handling the product quantity

export const homeQuantityToggle = (event,id,stock)=>{
    //? get the card on which the user is clicking
    const currentCardElement = document.querySelector(`#card${id}`);
   
    //? getn the product quatity 
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    //? get the data-quantity attribute in number for increament decreament
    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    //? Event Deligation selecting the clicked button
    if(event.target.className === "cartIncrement"){
        //? when quatity of the product is less than stock then increase if equal to stock size the the stock size is the maximum quantity  
        if(quantity < stock){
            quantity++
        }else if(quantity === stock){ 
            quantity = stock            
        }
    }

    if(event.target.className === "cartDecrement"){
        //? if the quantity is greater than 1 only then decrease the value ;
        if(quantity > 1){
            quantity--;
        }
    }
    
    //? updating the product quantity by the new increase or deacrease value
    productQuantity.innerText = quantity;
    //? set the data-quantity attribute to quantity to get above and increase decrease the current value
    productQuantity.setAttribute("data-quantity",quantity);
    return quantity;
}