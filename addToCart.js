import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";
getCartProductFromLS()
export const addToCart = (event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();
    const currentProductElement = document.querySelector(`#card${id}`);
    let quantity = currentProductElement.querySelector(".productQuantity").innerText;
    let price = currentProductElement.querySelector(".productPrice").innerText;
    //? here the price we are getting is already with the ruppe sign do before setting the data to local storage we have to remove the ruppe sign from the price using replace() methode||

    price = price.replace('₹', "");

    let existingProduct = arrLocalStorageProduct.find((curProd) => curProd.id === id);


    //? if the quantity of the same product is greater than 1 then it will add in the cart
    if (existingProduct && quantity > 1) {
        quantity = Number(existingProduct.quantity) + Number(quantity);
        price = Number(price * quantity);

        let updatedCart = { id, quantity, price };

        updatedCart = arrLocalStorageProduct.map((curelem) => {
            return curelem.id === id ? updatedCart : curelem;
        });
        // console.log(updatedCart);

        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    } if (existingProduct) {
        if(quantity == 1){
         alert("Item already Exist in the Cart");
         return;
        }
        
        return false;
    }

    //? if the product is already exist in the cart then do not add it agian.

    quantity = Number(quantity);
    price = Number(price * quantity)//? updated price with the quantity of product

    //? pushing to local storage
    arrLocalStorageProduct.push({ id, quantity, price });

    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
    //? update the card button
    updateCartValue(arrLocalStorageProduct);
}