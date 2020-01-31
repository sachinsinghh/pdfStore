import React from 'react';
import './MainContent.css';

const MainContent = (props) => {
    return (
        <div className="main_content">
            {props.children}
            </div>
        

    );
}


export default MainContent;