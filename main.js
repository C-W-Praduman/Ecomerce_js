//? import is an ECMA script tool to use it we have added type = "module" in the script tag
import './style.css'

import products from './api/products.json';
import { showProductContainer } from './homeProductCards';

showProductContainer(products);
