import React from 'react';
import './SearchBox.css';

const SearchBox = ({onSearchChange}) => {
    return ( 
        <input
            className='search-box'
            type='search'
            placeholder='Search Monsters'
            onChange={onSearchChange}
        ></input>
     );
}
 
export default SearchBox;props