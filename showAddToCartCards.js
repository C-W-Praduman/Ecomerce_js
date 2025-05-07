import products from "./api/products.json"
import { fetchQuantityfromLs } from "./fetchQuantityfromLs";
import { getCartProductFromLS } from "./getCartProductFromLS"
import { increamentDecreament } from "./increamentDecreament";
import { removeCartProduct } from "./removeCartProduct";


let cartProducts = getCartProductFromLS();//? the data we are getting from the local storage

let filterproducts = products.filter((curprod) => {

    return cartProducts.some((curElem) => { // ? find if the product id is matched with the local storage data id 
        return curElem.id === curprod.id
    })
    //? this return an array of products containing the product only which are addded in the card 
    //? why we do this because to get the full detail about the product we only have the id price and quantity on the local storage and we have to show the picture or more on the addtocart page.
});

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");





const showCartProduct = ()=>{


    filterproducts.forEach((curProd) => {
    

        const {category ,id, image, name, stock, price } = curProd;
        
        const productClone = document.importNode(templateContainer.content, true);

        const lsActualdata = fetchQuantityfromLs(id,price);

        
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        productClone.querySelector(".category").innerText = category;
        productClone.querySelector(".productImage").src = image; 
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productName").innerText = name;



        productClone.querySelector(".productPrice").innerText = lsActualdata.price
        productClone.querySelector(".productQuantity").innerText = lsActualdata.quantity

        productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
            increamentDecreament(event,id,stock,price);

        })
    
        productClone.querySelector(".remove-to-cart-button").addEventListener("click", (event)=>{
            removeCartProduct(id);
        })
        cartElement.append(productClone)
    
    });




}












showCartProduct();