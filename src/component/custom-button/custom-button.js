import React from 'react';

import './custom-button.scss'


const CustomButton =({children,inverted,...otherprops})=>(
    <button className={`${inverted? 'inverted' : ''} 
    custom-button `} {...otherprops}>
        {children}
    </button>

)

export default CustomButton;