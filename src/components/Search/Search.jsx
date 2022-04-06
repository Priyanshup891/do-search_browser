import React from 'react';
import './search.css';

import {FaSearch} from 'react-icons/fa'

const Search = () => {
  return (
    <div className='search__container'>
      <FaSearch size={24} style={{color:"#AAAAAA"}}/>
      <input type="text" placeholder='Search' />
    </div>
  )
}

export default Search