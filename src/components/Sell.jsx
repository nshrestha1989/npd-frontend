import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../styles/sell.css";
import axios from "axios";
import create from "../services/PropertyService";

const Sell=()=>{
    const initialPropertyState={
        id:null,
        title:"",
        address:"",
        price:"",
        picture:""
    };


const [property,setProperty]=useState(initialPropertyState);
const[submitted,setSubmitted] =useState(false);

const handleInputChange=event=>{
    const{name,value}=event.target;
    setProperty({...property,[name]:value});
};

const saveProperty=()=>{
    var data={
        title:property.title,
        address:property.address,
        price:property.price,
        picture:property.picture
    };

create(data).then(response =>{
        setProperty({
            id:response.data.id,
            title:response.data.title,
            address:response.data.address,
            price:response.data.price,
            picture:response.data.picture
        });
        setSubmitted(true);
        console.log(response.data);
    })
    .catch(e=>{
        console.log(e);
    });
};

const newProperty=() => {
    setProperty(initialPropertyState);
    setSubmitted(false);
};


return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newProperty}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={property.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

         
          
          <div className="form-group">
            <label htmlFor="picture">picture</label>
            <input
              type="text"
              className="form-control"
              id="picture"
              required
              value={property.picture}
              onChange={handleInputChange}
              name="picture"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              required
              value={property.price}
              onChange={handleInputChange}
              name="price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              required
              value={property.address}
              onChange={handleInputChange}
              name="address"
            />
          </div>

          <button onClick={saveProperty} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};





    // return (
    //     <div>
    //         <form className="create-property">

    //             <input
    //                 name="title"
    //                 onChange={handleChange}
    //                 value={property.title}
    //                 placeholder="Title"
    //             />

    //             <input
    //                 name="address"
    //                 onChange={handleChange}
    //                 value={property.address}
    //                 placeholder="address"
    //             />

    //             <input
    //                 name="picture"
    //                 onChange={handleChange}
    //                 value={property.picture}
    //                 placeholder="picture"
    //             />

    //             <input
    //                 name="price"
    //                 onChange={handleChange}
    //                 value={property.price}
    //                 placeholder="price"
    //             />

    //         </form>

    //         <Button onClick={submitproperty}>
    //             submit
    //           </Button>


    //     </div>
    // );


//     const [selectedFiles, setSelectedFiles] = useState([]);

//     const handleImageChange = (e) => {
//         // console.log(e.target.files[])
//         if (e.target.files) {
//             const filesArray = Array.from(e.target.files).map((file) =>
//                 URL.createObjectURL(file)
//             );

//             // console.log("filesArray: ", filesArray);

//             setSelectedFiles((prevImages) => prevImages.concat(filesArray));
//             Array.from(e.target.files).map(
//                 (file) => URL.revokeObjectURL(file) // avoid memory leak
//             );
//         }
//     };

//     const renderPhotos = (source) => {
//         console.log("source: ", source);
//         return source.map((photo) => {
//             return <img src={photo} alt="" key={photo} />;
//         });
//     };


//     return (<div className="container-fluid">
//         <div style={{ textAlign: "center" }}>
//             <h1 >Post an Ad </h1>
//         </div>

//         <Container>
//             <Form>

//                 <Row>
//                     <Col md>
//                         <Form.Group controlId="formfName">
//                             <Form.Label>First Name</Form.Label>
//                             <Form.Control type="fName" placeholder="First Name" />
//                         </Form.Group>
//                     </Col>
//                     <Col md>
//                         <Form.Group controlId="formLName">
//                             <Form.Label>Last Name</Form.Label>
//                             <Form.Control type="LName" placeholder="Last Name" />
//                         </Form.Group>
//                     </Col>

//                 </Row>

//                 <Form.Group controlId="formEmail">
//                     <Form.Label>Email Address</Form.Label>
//                     <Form.Control type="Email" placeholder="Example@email.com" />
//                     <Form.Text style={{color:"#171716"}}>
//                         *Require email address for contact!!!
//         </Form.Text>
//                 </Form.Group>

//                 <Form.Group controlId="formTitle">
//                     <Form.Label>Property Title</Form.Label>
//                     <Form.Control type="Title" placeholder="Title" />
//                 </Form.Group>

//                 <Form.Group controlId="formAddress">
//                     <Form.Label>Property Address</Form.Label>
//                     <Form.Control type="Address" placeholder="Address" />
//                 </Form.Group>


//                 <Form.Group controlId="formPhone">
//                     <Form.Label>Phone</Form.Label>
//                     <Form.Control type="Phone" pattern="[0-9]*" placeholder="Phone" />
//                 </Form.Group>

//                 <Form.Group controlId="formPrice">
//                     <Form.Label>Price</Form.Label>
//                     <Form.Control type="Price" pattern="[0-9]*" placeholder="Price" />
//                 </Form.Group>

//                 <Form.Group controlId="formDescription">
//                     <Form.Label>Property Description</Form.Label>
//                     <Form.Control as="textarea" rows={4} placeholder="Description" />
//                 </Form.Group>

//                 {/* image section */}
//                 <div className="image-section">
//                     <div>
//                         <input type="file" id="file" multiple onChange={handleImageChange} />

//                         <div className="heading-image">Upload Image here</div>
//                         <div className="label-holder">
//                             <label htmlFor="file" class="btn btn-primary btn-block mb-4 label">
//                                 <i className="material-icons">add_a_photo</i>
//                             </label>

//                         </div>
//                         <div className="result">{renderPhotos(selectedFiles)}</div>
//                     </div>
//                 </div>
//                 <Button variant="secondary" type="submit">Submit</Button>
//             </Form>
//         </Container>


//     </div>
//     );


// }

export default Sell;