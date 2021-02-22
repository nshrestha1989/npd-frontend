import React from "react";
import {Card,Container} from "react-bootstrap"


function Property(props) {
 

  return (
 
    <Card style={{ width: '40rem' , height:'40rem' }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{props.address}</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">{props.price}</Card.Subtitle>
      <Card.Text sytle={{color:'red'}}>
       {props.picture}
      </Card.Text>
    
    </Card.Body>
  </Card> 
 
  );
}

export default Property;

