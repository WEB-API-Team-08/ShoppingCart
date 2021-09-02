import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from 'axios';

const App = () => {

  const initialState = {
    itemName: "",
    price: "",
    imgUrl: ""
  };

  const [state, setState] = React.useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("App state:",state);
    console.log("on post");
    axios.post(`http://localhost:5000/api/admin/items/create`, state)
      .then((response) => {
        console.log(response);
      })
  };
  
  const handleChange = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
  };

  // handleChange = (e) => {
  //   setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  // handleSubmit = (e) => {
  //   console.log("on post");
  //   e.preventDefault()
  //   axios.post(`http://localhost:5000/api/admin/items/create`, this.state)
  //     .then((response) => {
  //       console.log(response);
  //     })
  // }

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
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                name="imgUrl"
                value={state.imgUrl}
                type="text"
                placeholder="URL.."
                onChange={handleChange}
              />
            </Form.Group>
            <Button className="btn-lg" variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default App;