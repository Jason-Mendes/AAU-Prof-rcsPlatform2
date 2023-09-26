import React from 'react';

// rest of the code goes here
const Searchbox = () => {
    return (
        <from classNAme="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" 
            type="search"
            placeholder="Search" 
            aria-label="Search" 
            />
            <button className="btn btn-outline-success my-2 my-sm-0" 
            type="submit">
                Search
            </button>
            </from>
    );
};

export default Searchbox;