import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../cart/CartProducts.module.scss';
import Order from './Order';

const OrdersList = () => {

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:5000/api/user/orders/`)
            .then(res => {

                setOrders(res.data)
            }).catch(err => {
                console.log(err)
            });

    }, [])

    return (
        <div className="card card-body">
            <div className={styles.p__container}>

                {
                    orders.map(order => (
                        <Order key={order._id} order={order} />
                    ))
                }

            </div>


        </div>
    );
}

export default OrdersList;