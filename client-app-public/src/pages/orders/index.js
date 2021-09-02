import React from 'react';
import Layout from '../../components/Layout';
import OrdersList from './OrdersList';

const Orders = (props) => {

    const orderId = props.match.params.orderId;

    return (
        <Layout title="Orders" description="This is the Orders page" >
            <div>
                <div className="text-center mt-5">
                    <h1>Orders</h1>
                    <p>This is the Orders Page.</p>
                </div>
                <OrdersList/>
            </div>
        </Layout>
    );
}

export default Orders;