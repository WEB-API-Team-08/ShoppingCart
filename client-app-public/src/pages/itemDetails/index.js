import React from 'react';
import Layout from '../../components/Layout';
import ItemContainer from './ItemContainer';

const ItemDetails = (props) => {

    const itemId = props.match.params.itemId;

    return (
        <Layout title="Item Detaills" description="This is the Item Details page" >
            <div>
                <div className="text-center mt-5">
                    <h1>Item Details</h1>
                    <p>This is the Item Details Page.</p>
                </div>
                <ItemContainer id={itemId} />
            </div>
        </Layout>
    );
}

export default ItemDetails;