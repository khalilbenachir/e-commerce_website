import React from 'react'
import {connect } from 'react-redux'

import './cart-dropdown.scss'
import CustomButton from '../custom-button/custom-button'

import CartItem from '../cart-item/cart-item'

const CartDropdown =(props)=>{
    return(
        <div className='cart-dropdown'>
            <div className='cart-item'>
                {
                    props.cartItems.map((item)=>(
                        <CartItem key={item.id} item={item}/>
                    ))    

                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);