import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

const ItemContainer = ({ id }) => {

    const { addProduct, cartItems, increase } = useCart();
    const [product, setProduct] = useState([]);


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

                {
                    isInCart(product) &&
                    <button
                        onClick={() => increase(product)}
                        className="btn btn-outline-primary btn-sm">Add more</button>
                }

                {
                    !isInCart(product) &&
                    <button
                        onClick={() => addProduct(product)}
                        className="btn btn-primary btn-sm">Add to cart</button>
                }

            </div>
        </div>
    );
}

export default ItemContainer;