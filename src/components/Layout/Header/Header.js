import React from 'react';

const Header = () => {
    return (<div className="top_bar">
    <div className="top_search">
      <div className="search_text"><a href="#">Advanced Search</a></div>
      <input type="text" className="search_input" name="search" />
      <input type="image" src="images/search.gif" className="search_bt"/>
    </div>
    <div className="languages">
      <div className="lang_text">Languages:</div>
      <a href="#" className="lang"><img src="images/en.gif" alt="" border="0" /></a> <a href="#" className="lang">
        <img src="images/de.gif" alt="" border="0" /></a> 
      </div>
    </div>);
}

export default Header;