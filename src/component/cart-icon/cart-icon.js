import React from 'react';
import './cart-icon.scss'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart-action'

import {ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg'



const CartIcon =({toggleCartHidden})=>(
    <div className='cart-icon'>
        <ShoppingIcon className='icon' onClick={toggleCartHidden}/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
       toggleCartHidden:()=>dispatch(toggleCartHidden())    
})


export default connect(null,mapDispatchToProps)(CartIcon);