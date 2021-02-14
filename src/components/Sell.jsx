import React, { useState } from "react";
import { Card, ListGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import ImageIcon from '@material-ui/icons/Image';


var customStyle = {
    textAlign: "center",
    paddingBottom: "10%"
}



function Sell() {

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageChange = (e) => {
        // console.log(e.target.files[])
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
            );

            // console.log("filesArray: ", filesArray);

            setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file) // avoid memory leak
            );
        }
    };

    const renderPhotos = (source) => {
        console.log("source: ", source);
        return source.map((photo) => {
            return <img src={photo} alt="" key={photo} />;
        });
    };


    return (<div class="container-fluid">
        <div style={customStyle}>
            <h1  >Post an Ad </h1>
        </div>
        <div>
            <form>

                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <input type="text" id="form6Example1" class="form-control" />
                            <label class="form-label" for="form6Example1">First name</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <input type="text" id="form6Example2" class="form-control" />
                            <label class="form-label" for="form6Example2">Last name</label>
                        </div>
                    </div>
                </div>


                <div class="form-outline mb-4">
                    <input type="text" id="form6Example3" class="form-control" />
                    <label class="form-label" for="form6Example3">Title</label>
                </div>


                <div class="form-outline mb-4">
                    <input type="text" id="form6Example4" class="form-control" />
                    <label class="form-label" for="form6Example4">Property Address</label>
                </div>


                <div class="form-outline mb-4">
                    <input type="email" id="form6Example5" class="form-control" />
                    <label class="form-label" for="form6Example5">Email</label>
                </div>


                <div class="form-outline mb-4">
                    <input type="number" id="form6Example6" class="form-control" />
                    <label class="form-label" for="form6Example6">Phone</label>
                </div>


                <div class="form-outline mb-4">
                    <textarea class="form-control" id="form6Example7" rows="4"></textarea>
                    <label class="form-label" for="form6Example7">Description</label>
                </div>


                <div className="image-section">


                    {/* image upload section */}

                    <div>
                        <input type="file" id="file" multiple onChange={handleImageChange} />

                        <div className="heading-image">Upload Image here</div>
                        <div className="label-holder">
                            <label htmlFor="file" class="btn btn-primary btn-block mb-4 label">
                                <i className="material-icons">add_a_photo</i>
                            </label>
                           
                        </div>
                        <div className="result">{renderPhotos(selectedFiles)}</div>
                    </div>
                </div>
                

                <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>

                <div class="
                form-outline mb-4 form-check d-flex justify-content-center mb-4">
                    <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form6Example8"
                    />
                    <label class="form-check-label" for="form6Example8"> Create an account? </label>
                </div>
            </form>
        </div>




    </div>


    );


}

export default Sell;