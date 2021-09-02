import React from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../helpers/utils';

const Order = ({ order }) => {


    return (
        <div className="row no-gutters py-2">
            {/* <div className="col-sm-2 p-2">
                <img
                    alt={item.itemName}
                    style={{ margin: "0 auto", maxHeight: "50px" }}
                    src={item.imgUrl} className="img-fluid d-block" />
            </div> */}
            <div className="col-sm p-2">
                <h5 className="mb-1">Total: {formatNumber(order.total)}</h5>
                <p className="mb-0">Created At: {order.createdAt}</p>

            </div>
            {/* <div className="col-sm-2 p-2 text-center ">
                <p className="mb-0">Qty: {item.quantity}</p>
            </div> */}
            <div className="d-inline float-right">
                    <Link to={`/orderDetails/${order._id}`} className="btn btn-link btn-sm mr-2">Details</Link>

                </div>
        </div>
    );
}

export default Order;