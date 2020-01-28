import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => (
    <>
    <div>Header check,Categories,Shopping Cart,Special Product,Whats'new, Manufacturer,NewsLetter,Advertisement Left1,Advertisement Right 1,Footer</div>
    <main>{props.children}</main>
    </>
)

export default layout;