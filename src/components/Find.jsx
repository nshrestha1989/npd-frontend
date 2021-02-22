import React, { useEffect, useState } from "react";
import "../styles/search.css"
import {Container} from "react-bootstrap";
import axios from "axios";
import Property from "./Property";


function Find() {

        const[property,setProperty]=useState([]);

        useEffect (() => {
            axios.get("/npd/property").then(response => {
                setProperty(existingProperty => {
                    return response.data;
            
                  });
            
                });
              }, []);
      
      

           


    const [searchTerm, setSearchTerm ]= useState("");

    return (<Container>
        <div>
         <div style={{ textAlign: "center" }}>
            <h1  >Search Property to buy </h1>
        </div>
             
              <div className="Find">
            <input
                type="text"
                placeholder="Search..."
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
            />
            
            {property.filter((val) => {
                if (searchTerm === "") {
                    return val;
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                }
            }).map((propertyItem, index) => {
                return (
                    <div className="user" key={index}>
                    <Property
            key={index}
            id={propertyItem.id}
            title={propertyItem.title}
            address={propertyItem.address}
            price={propertyItem.price}
            picture={propertyItem.picture}
          
          />
                 
                    </div>
                );
            })}
        </div>
        </div>
        </Container>
    );
}

export default Find;