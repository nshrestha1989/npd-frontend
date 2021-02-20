import React, { useState } from "react";
import JSONDATA from "../MOCK_DATA.json";
import "../styles/search.css"
import {Container} from "react-bootstrap";



function Find() {
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
            {JSONDATA.filter((val) => {
                if (searchTerm === "") {
                    return val;
                } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                }
            }).map((val, key) => {
                return (
                    <div className="user" key={key}>
                        <p>{val.first_name}</p>
                    </div>
                );
            })}
        </div>
        </div>
        </Container>
    );
}

export default Find;