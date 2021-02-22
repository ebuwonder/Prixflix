import React from 'react';
import SearchField from "react-search-field";
import '../App.css';

function SearchBox({ placeholder, searchField, handleChange }) {
    return (
        <SearchBox
            className="search"
            type="search"
            name={searchField}
            placeholder={placeholder}
            onChange={handleChange}
        />
    )

}

export default SearchBox

// import React from "react";

// function Search() {
//     return (
//         <div><h1>Search</h1></div>
//     );
// }

// export default Search;