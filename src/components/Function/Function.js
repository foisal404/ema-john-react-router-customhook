import { Await } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

// asyncronize so use async  cz we need to cheek with products json 
const orderedItems=async ()=>{
    const loadedProducts= await fetch('products.json');
    const products= await loadedProducts.json();
    
    const storedCart = getShoppingCart();
    // step 1
    const cart=[]
    for(let id in storedCart){
        // step 2
        const product=products.find(pb=> pb.id=== id)
        // step 3
        product.quantity=storedCart[id];
        cart.push(product);

    }
    return cart;
}
export {orderedItems}