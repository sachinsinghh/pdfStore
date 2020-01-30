import React from 'react';
import './Layout.css';


const layout = (props) => (
    <>
    <div className="main_container">
    {props.children}
    </div>
    </>
)

export default layout;