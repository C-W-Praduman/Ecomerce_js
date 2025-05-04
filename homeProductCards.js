
//? import is an ECMA script tool to use it we have added type = "module" in the script tag

import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

// ? Selecting Dom
const productContainer = document.querySelector("#productContainer")
const productTemplate = document.querySelector("#productTemplate")

//? updating all content of the template and append it to the productContainer
export const showProductContainer = (products) => {
    if (!products) return false;
    products.forEach((curprod) => {
        const { id, name, image, description, stock, price, brand, category } = curprod;

        const productClone = document.importNode(productTemplate.content, true);
        //? get the reference of cardvalue and change the id to product id to acces the current clicking element
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".ProductDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent = `₹${price}`;
        productClone.querySelector(".productActualPrice").textContent = `₹${price * 4}`;
        productClone.querySelector(".productStock").textContent = stock;


        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            homeQuantityToggle(event, id, stock);
        });
        productClone.querySelector(".add-to-cart-button").addEventListener("click",(event)=>{
            addToCart(event, id ,stock);
        })
        productContainer.append(productClone);

    })
}