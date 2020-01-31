import React from 'react';
import './Header.css';
import search from './images/search.gif'; 
import de from './images/de.gif'; 
import en from './images/en.gif'; 


const Header = () => {
    return (
      <>
       <div class="top_bar">

      <div className="top_search">
            <div className="search_text">
              <a href="#">Advanced Search Sachin</a>
              </div>
            <input type="text" className="search_input" name="search" />
            <input type="image" src={search} className="search_bt"/>
    </div>

    
    <div className="languages">
      <div className="lang_text">Languages:</div>
      <a href="#" className="lang"><img src={en} alt="" border="0" /></a>
       <a href="#" className="lang">
        <img src={de} alt="" border="0" />
        </a> 
      </div>
      </div>
      </>
    );
}

export default Header;