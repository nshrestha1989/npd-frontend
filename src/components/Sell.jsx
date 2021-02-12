import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function Sell() {
    return (<div><h1>Sell Page</h1>
        <Card style={{ width: '18rem' }}>
            <ListGroup>
                <ListGroup.Item>Product 1</ListGroup.Item>
                <ListGroup.Item>Product 2</ListGroup.Item>
                <ListGroup.Item>Product 3</ListGroup.Item>
            </ListGroup>
        </Card></div>);


}

export default Sell;