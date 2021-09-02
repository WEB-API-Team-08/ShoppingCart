import React from 'react';

import { formatNumber } from '../../helpers/utils';

const OrderItem = ({ item }) => {


    return (
        <div className="row no-gutters py-2">
            {/* <div className="col-sm-2 p-2">
                <img
                    alt={item.itemName}
                    style={{ margin: "0 auto", maxHeight: "50px" }}
                    src={item.imgUrl} className="img-fluid d-block" />
            </div> */}
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{item.itemName}</h5>
                <p className="mb-1">Price: {formatNumber(item.price)} </p>

            </div>
            <div className="col-sm-2 p-2 text-center ">
                <p className="mb-0">Qty: {item.quantity}</p>
            </div>
        </div>
    );
}

export default OrderItem;