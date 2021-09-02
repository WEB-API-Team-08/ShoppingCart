import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from 'axios';

const Updateitem = ({ id }) => {
    const initialState = {
        itemName: "",
        price: ""
    };

    const [state, setState] = React.useState(initialState);

    console.log(id)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("App state:", state);
        console.log("on post");

        axios.put(`http://localhost:5000/api/admin/items/update/${id}`, state)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err)
            })


    };

    const handleChange = ({ target: { value, name } }) => {
        setState({ ...state, [name]: value });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control
                                name="itemName"
                                value={state.itemName}
                                type="text"
                                placeholder="Item Name.."
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                name="price"
                                value={state.price}
                                type="text"
                                placeholder="Price.."
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button className="btn-lg" variant="success" type="submit">
                            Update
                        </Button>
                        

                    </Form>
                </Col>
            </Row>
        </Container>

    );
    };


export default Updateitem;