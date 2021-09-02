import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';
import LikeButton from '../../components/shared/LikeButton';

const ItemContainer = ({ id }) => {

    const { addProduct, cartItems, increase } = useCart();
    const [product, setProduct] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:5000/api/items/${id}`)
            .then(res => {
                setProduct(res.data)
            }).catch(err => {
                console.log(err)
            })

    }, [id])

    const isInCart = product => {
        return !!cartItems.find(item => item._id === product._id);
    }




    return (
        <div className="card card-body">
            <img style={{ display: "block", margin: "0 auto 10px", maxHeight: "400px" }} className="img-fluid"
                src={product.imgUrl} alt="" />
            <p>{product.itemName}</p>
            <h3 className="text-left">{formatNumber(product.price)}</h3>
            <div>

                <div className="d-inline float-left">
                    <LikeButton id={product._id} likeCount={product.likeCount} />
                </div>
                <div className="d-inline float-right">

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

        </div>
    );
}

export default ItemContainer;