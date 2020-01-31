import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <>
        <div className="menu_tab">
      <div className="left_menu_corner"></div>
      <ul className="menu">
        <li><a href="#" className="nav1"> Home</a></li>
        <li className="divider"></li>
        <li><a href="#" className="nav2">Products</a></li>
        <li className="divider"></li>
        <li><a href="#" className="nav3">Specials</a></li>
        <li className="divider"></li>
        <li><a href="#" className="nav4">My account</a></li>
        <li className="divider"></li>
        <li><a href="#" className="nav4">Sign Up</a></li>
        <li className="divider"></li>
        <li><a href="#" className="nav5">Shipping</a></li>
        <li className="divider"></li>
        <li><a href="contact.html" className="nav6">Contact Us</a></li>
        <li className="divider"></li>
        <li className="currencies">Currencies
          <select>
            <option>US Dollar</option>
            <option>Euro</option>
          </select>
        </li>
      </ul>
      <div className="right_menu_corner"></div>
    </div>
    </>
    );
}

export default Menu;