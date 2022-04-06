import React, {useEffect} from 'react';
import './header.css';

import Search from '../Search/Search';
import NewsFeeds from '../NewsFeeds/NewsFeeds';
import decore from '../../assets/images/decore.svg';



const Header = () => {

  return (
    <div className='header__section'>
        {/* <img className='header__decore' src={decore} alt="" /> */}
        <div className='header__section-container'>
            <div className='header__section-container_Search'>
                <h1>do-Search</h1>
                <Search/>
            </div>
            <div className='header__section-container_NewsFeeds'>
                <NewsFeeds/>
            </div>
        </div>
    </div>
  )
}

export default Header;