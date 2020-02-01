import React from 'react';
import './LeftContent.css';

const LeftContent = () => {
    return (
        <div className="left_content">
        <div className="title_box">Categories</div>
        <ul className="left_menu">
          <li className="odd"><a href="#">Processors</a></li>
          <li className="even"><a href="#">Motherboards</a></li>
          <li className="odd"><a href="#">Desktops</a></li>
          <li className="even"><a href="#">Laptops &amp; Notebooks</a></li>
          <li className="odd"><a href="#">Processors</a></li>
          <li className="even"><a href="#">Motherboards</a></li>
          <li className="odd"><a href="#">Processors</a></li>
          <li className="even"><a href="#">Motherboards</a></li>
          <li className="odd"><a href="#">Desktops</a></li>
          <li className="even"><a href="#">Laptops &amp; Notebooks</a></li>
          <li className="odd"><a href="#">Processors</a></li>
          <li className="even"><a href="#">Motherboards</a></li>
        </ul>
        <div className="title_box">Special Products</div>
        <div className="border_box">
          <div className="product_title"><a href="details.html">Motorola 156 MX-VL</a></div>
          <div className="product_img"><a href="details.html"><img src="images/laptop.png" alt="" border="0" /></a></div>
          <div className="prod_price"><span className="reduce">350$</span> <span className="price">270$</span></div>
        </div>
        <div className="title_box">Newsletter</div>
        <div className="border_box">
          <input type="text" name="newsletter" className="newsletter_input" value="your email"/>
          <a href="#" className="join">join</a> </div>
        <div className="banner_adds"> <a href="#"><img src="images/bann2.jpg" alt="" border="0" /></a> </div>
      </div>
    );
}

export default LeftContent;