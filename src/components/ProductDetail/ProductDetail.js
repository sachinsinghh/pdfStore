import React from 'react';
import './ProductDetail.css';

const ProductDetail = () => {
    return (
        <div className="center_content">
        <div className="center_title_bar">Motorola 156 MX-VL</div>
        <div className="prod_box_big">
          <div className="top_prod_box_big"></div>
          <div className="center_prod_box_big">
            <div className="product_img_big"> <a href="javascript:popImage('images/big_pic.jpg','Some Title')" title="header=[Zoom] body=[&nbsp;] fade=[on]"><img src="images/laptop.gif" alt="" border="0" /></a>
              <div className="thumbs"> <a href="#" title="header=[Thumb1] body=[&nbsp;] fade=[on]"><img src="images/thumb1.gif" alt="" border="0" /></a> <a href="#" title="header=[Thumb2] body=[&nbsp;] fade=[on]"><img src="images/thumb1.gif" alt="" border="0" /></a> <a href="#" title="header=[Thumb3] body=[&nbsp;] fade=[on]"><img src="images/thumb1.gif" alt="" border="0" /></a> </div>
            </div>
            <div className="details_big_box">
              <div className="product_title_big">My Cinema-U3000/DVBT, USB 2.0 TV BOX External, White</div>
              <div className="specifications"> Disponibilitate: <span className="blue">In stoc</span><br />
                Garantie: <span className="blue">24 luni</span><br />
                Tip transport: <span className="blue">Mic</span><br />
                Pretul include <span className="blue">TVA</span><br />
              </div>
              <div className="prod_price_big"><span className="reduce">350$</span> <span className="price">270$</span></div>
              <a href="#" className="addtocart">add to cart</a> <a href="#" className="compare">compare</a> </div>
          </div>
          <div className="bottom_prod_box_big"></div>
        </div>
        <div className="center_title_bar">Similar products</div>
        <div className="prod_box">
          <div className="top_prod_box"></div>
          <div className="center_prod_box">
            <div className="product_title"><a href="details.html">Motorola 156 MX-VL</a></div>
            <div className="product_img"><a href="details.html"><img src="images/laptop.gif" alt="" border="0" /></a></div>
            <div className="prod_price"><span className="reduce">350$</span> <span className="price">270$</span></div>
          </div>
          <div className="bottom_prod_box"></div>
          <div className="prod_details_tab"> <a href="#" title="header=[Add to cart] body=[&nbsp;] fade=[on]"><img src="images/cart.gif" alt="" border="0" className="left_bt" /></a> <a href="#" title="header=[Specials] body=[&nbsp;] fade=[on]"><img src="images/favs.gif" alt="" border="0" className="left_bt" /></a> <a href="#" title="header=[Gifts] body=[&nbsp;] fade=[on]"><img src="images/favorites.gif" alt="" border="0" className="left_bt" /></a> <a href="details.html" className="prod_details">details</a> </div>
        </div>
        <div className="prod_box">
          <div className="top_prod_box"></div>
          <div className="center_prod_box">
            <div className="product_title"><a href="details.html">Iphone Apple</a></div>
            <div className="product_img"><a href="details.html"><img src="images/p4.gif" alt="" border="0" /></a></div>
            <div className="prod_price"><span className="price">270$</span></div>
          </div>
          <div className="bottom_prod_box"></div>
          <div className="prod_details_tab"> <a href="#" title="header=[Add to cart] body=[&nbsp;] fade=[on]"><img src="images/cart.gif" alt="" border="0" className="left_bt" /></a> <a href="#" title="header=[Specials] body=[&nbsp;] fade=[on]"><img src="images/favs.gif" alt="" border="0" className="left_bt" /></a> <a href="#" title="header=[Gifts] body=[&nbsp;] fade=[on]"><img src="images/favorites.gif" alt="" border="0" className="left_bt" /></a> <a href="details.html" className="prod_details">details</a> </div>
        </div>
        <div className="prod_box">
          <div className="top_prod_box"></div>
          <div className="center_prod_box">
            <div className="product_title"><a href="details.html">Samsung Webcam</a></div>
            <div className="product_img"><a href="details.html"><img src="images/p5.gif" alt="" border="0" /></a></div>
            <div className="prod_price"><span className="reduce">350$</span> <span className="price">270$</span></div>
          </div>
          <div className="bottom_prod_box"></div>
          <div className="prod_details_tab"> <a href="#" title="header=[Add to cart] body=[&nbsp;] fade=[on]"><img src="images/cart.gif" alt="" border="0" className="left_bt" /></a> <a href="#" title="header=[Specials] body=[&nbsp;] fade=[on]"><img src="images/favs.gif" alt="" border="0" className="left_bt" /></a> <a href="#" title="header=[Gifts] body=[&nbsp;] fade=[on]"><img src="images/favorites.gif" alt="" border="0" className="left_bt" /></a> <a href="details.html" className="prod_details">details</a> </div>
        </div>
      </div>
    );

}

export default ProductDetail;