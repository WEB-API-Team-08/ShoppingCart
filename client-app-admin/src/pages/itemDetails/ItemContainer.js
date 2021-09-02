import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';
import Updateitem from '../addItems/updateitem';

const ItemContainer = ({ id }) => {

    const { addProduct, cartItems, increase } = useCart();
    const [product, setProduct] = useState([]);
    // const [product, setAllProduct] = useAllState([]);
    // const [product, addProduct] = useAddState([]);
    // const [product, editProduct] = useputState([]);
    // const [product, deleteProduct] = usedeleteState([]);


    useEffect(async () => {
        await axios.get(`http://localhost:5000/api/items/${id}`)
            .then(res => {
                setProduct(res.data)
            }).catch(err => {
                console.log(err)
            })

    }, [])


   


    const isInCart = product => {
        return !!cartItems.find(item => item._id === product._id);
    }

    return (
        <div className="card card-body">
            <img style={{ display: "block", margin: "0 auto 10px", maxHeight: "400px" }} className="img-fluid"
                src={product.imgUrl} alt="" />
            <p>{product.itemName}</p>
            <h3 className="text-left">{formatNumber(product.price)}</h3>
            <div className="text-right">

                                <h5 style={{ display: "flex", flexDirection: "col" }}>To Update the Product</h5>

               <Updateitem id={id}></Updateitem>

                <div style={{ display: "flex", flexDirection: "col" }}>

                    <button onClick={()=>{
                         axios.delete(`http://localhost:5000/api/admin/items/delete/${id}`)
                                .then(res => {
                              console.log(res);
                                }).catch(err => {
                                    console.log(err)
                                })
                    }}>Delete</button>

                </div>

            </div>
        </div>
    );
}

export default ItemContainer;