import React from 'react';
import './RightContent.css';


const RightContent = () => {
    return (
        <div className="right_content">
      <div className="shopping_cart">
        <div className="cart_title">Shopping cart</div>
        <div className="cart_details"> 3 items <br />
          <span className="border_cart"></span> Total: <span className="price">350$</span> </div>
        <div className="cart_icon"><a href="#" title="header=[Checkout] body=[&nbsp;] fade=[on]"><img src="./images/shoppingcart.png" alt="" width="48" height="48" border="0" /></a></div>
      </div>
      <div className="title_box">What’s new</div>
      <div className="border_box">
        <div className="product_title"><a href="details.html">Motorola 156 MX-VL</a></div>
        <div className="product_img"><a href="details.html"><img src="images/p2.gif" alt="" border="0" /></a></div>
        <div className="prod_price"><span className="reduce">350$</span> <span className="price">270$</span></div>
      </div>
      <div className="title_box">Manufacturers</div>
      <ul className="left_menu">
        <li className="odd"><a href="#">Sony</a></li>
        <li className="even"><a href="#">Samsung</a></li>
        <li className="odd"><a href="#">Daewoo</a></li>
        <li className="even"><a href="#">LG</a></li>
        <li className="odd"><a href="#">Fujitsu Siemens</a></li>
        <li className="even"><a href="#">Motorola</a></li>
        <li className="odd"><a href="#">Phillips</a></li>
        <li className="even"><a href="#">Beko</a></li>
      </ul>
      <div className="banner_adds"> <a href="#"><img src="images/bann1.jpg" alt="" border="0" /></a> </div>
    </div>
    );

}

export default RightContent; 