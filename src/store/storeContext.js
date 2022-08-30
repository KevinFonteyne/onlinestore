import {createContext} from "react";


// context describes the data structure
// but does not provide implementations

const StoreContext = createContext({
    cart: [],
    user: {},

    addToCart: () => {},
    removeFromCart: () => {}

});


export default StoreContext;