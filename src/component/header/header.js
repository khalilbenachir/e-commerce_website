import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../asset/crown.svg';

import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'

import {connect }from 'react-redux';

import './header.scss';


const Header= ({hidden}) =>(
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">SHOP</Link>
            <Link className='option' to="/contact">CONTACT</Link>
            <Link className='option' to="/signin">SIGN IN</Link>
            <CartIcon/>
        </div>
{        
    hidden ? null:<CartDropdown/>
}    </div>
)

const mapStateToProps = (state) => ({
    hidden:state.cart.hidden
})

export default connect(mapStateToProps)(Header);