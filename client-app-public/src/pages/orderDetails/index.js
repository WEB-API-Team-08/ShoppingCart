import React from 'react';
import Layout from '../../components/Layout';
import OrderContainer from './OrderContainer';

const OrderDetails = (props) => {

    const orderId = props.match.params.orderId;

    return (
        <Layout title="Order Detaills" description="This is the Order Details page" >
            <div>
                <div className="text-center mt-5">
                    <h1>Order Details</h1>
                    <p>This is the Order Details Page.</p>
                </div>
                <OrderContainer id={orderId} />
            </div>
        </Layout>
    );
}

export default OrderDetails;