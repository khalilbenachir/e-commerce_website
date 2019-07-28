import React from 'react'
import './cart-item.scss'


const CartItem=({item:{imageUrl,price,name,quantity}})=>(
    <div className='cart-items'>
        <img src={imageUrl} alt='' className='image'/>
        <div className='item-detail'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
    </div>
)


export default CartItem;