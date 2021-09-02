import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { formatNumber } from '../../helpers/utils';
import styles from '../cart/CartProducts.module.scss';
import OrderItem from './OrderItem';

const OrderContainer = ({ id }) => {

    const [order, setOrder] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:5000/api/user/orders/${id}`)
            .then(res => {
                console.log("OrderContainer", res.data)
                setOrder(res.data)
                setCart(res.data.cart)
            }).catch(err => {
                console.log(err)
            });

    }, [id])

    return (
        <div className="card card-body">
            <div className={styles.p__container}>
                {
                    cart.map(item => (
                        <OrderItem key={item._id} item={item} />
                    ))
                }

            </div>


            <h3 className="text-right">Total: {formatNumber(order.total)}</h3>

        </div>
    );
}

export default OrderContainer;