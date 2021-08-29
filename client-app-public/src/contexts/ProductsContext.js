import React, { createContext, useState , useEffect } from 'react';
import axios from 'axios';
export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {

        axios.get("http://localhost:5000/api/items")
        .then(res =>{
            console.log(res)
            setProducts(res.data)
        }).catch(err =>{
            console.log(err)
        })

    },[])

  
    return ( 


        <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
     );
}

 
export default ProductsContextProvider;