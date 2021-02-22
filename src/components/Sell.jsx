import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../styles/sell.css";
import axios from "axios";

function Sell(props) {

    //property post request frontend
    const [property, setProperty] = useState([]);

    function addProperty(newProperty) {

        axios.post("/npd/property", newProperty).then(response => {
            setProperty(prevProperty => {
                return [...prevProperty, newProperty]
            });
        });

    }

    //crate form functions and state

    const [land, setLand] = useState({
        id: "",
        address: "",
        picture: "",
        price: " ",
        title: ""

    });

    function handleChange(event) {
        const { name, value } = event.target;

        setLand((prevLand) => {
            return {
                ...prevLand,
                [name]: value
            };
        });
    }

    function submitLand(event) {
        props.onAdd(land);
        setLand({
            id: "",
            address: "",
            picture: "",
            price: " ",
            title: ""
        });
        event.preventDefault();
    }


    return (
        <div>
            <form className="create-property">

                <input
                    name="title"
                    onChange={handleChange}
                    value={land.title}
                    placeholder="Title"
                />

                <input
                    name="address"
                    onChange={handleChange}
                    value={land.address}
                    placeholder="address"
                />

                <input
                    name="picture"
                    onChange={handleChange}
                    value={land.picture}
                    placeholder="picture"
                />

                <input
                    name="price"
                    onChange={handleChange}
                    value={land.price}
                    placeholder="price"
                />

            </form>

            <Button onClick={submitLand}>
                submit
              </Button>


        </div>
    );
}

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