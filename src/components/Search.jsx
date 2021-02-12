import React from "react";
import JSONDATA from "./Mock_DATA.json";
const [searchTerm, setSearchTerm] = useState('');

function Search() {

    return (<div class="input-group">
        <div class="form-outline">
            <input type="search" id="form1" class="form-control" onChange={
                event => { setSearchTerm(event.target.value) }
            } />
            {JSONDATA.filter().map((val, key) => {
                return (
                    <div className="user" key={key}>
                        <p>{val.first_name}</p>
                    </div>
                );
                <label class="form-label" for="form1">Search</label>
        </div>
        <button type="button" class="btn btn-primary">
            <i class="fas fa-search"></i>
        </button>
    </div>
    </div >
}

export default Search;