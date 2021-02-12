import React, { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";
import { Link } from "react-router-dom";



function Find() {
    const [searchTerm, setSearchTerm ]= useState("");
    return (
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
    );
}

export default Find;