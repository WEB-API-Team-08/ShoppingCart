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

    //console.log("dummyProducts",dummyProducts)
  
    return ( 

  // console.log(products)
        <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
     );
}

// const testDataset = async () => {

//     console.log("hit");
//     const { data } = await ApiService.get("http://localhost:5000/api/items");
//     console.log("data",data);
//     return data;
// }
 
export default ProductsContextProvider;