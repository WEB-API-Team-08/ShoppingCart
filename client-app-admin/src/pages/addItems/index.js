import React from 'react';
import Layout from '../../components/Layout';
import AddItem from './additem';

const AddItems = (props) => {

    const itemId = props.match.params.itemId;

    return (
        <Layout title="Add Items" description="This is the Add Items page" >
            <div >
                <div className="text-center mt-5">
                    <h1>Add Items</h1>
                    <p>This is the Add Items Page.</p>
                </div>
                <AddItem />
            </div>
        </Layout>
    );
}

export default AddItems;