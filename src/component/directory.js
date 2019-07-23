import './directory.scss';
import MenuItem from './menu-item';

import React, { Component } from 'react'

export default class HomePage extends Component {

    state={
    secvtion:
    [
        {
            title : 'Hats',
            id:1,
            imageUrl:'https://www.norcostco.com/ProductImages/detail/6051_2.jpg'
        
        },
        {
            title : 'Hats',
            id:2,
            imageUrl:'https://www.norcostco.com/ProductImages/detail/6051_2.jpg'
        
        },
        {
            title : 'Hats',
            id:3,
            imageUrl:'https://www.norcostco.com/ProductImages/detail/6051_2.jpg'
        
        },
        {
            title : 'Hats',
            id:4,
            size:'large',
            imageUrl:'https://www.norcostco.com/ProductImages/detail/6051_2.jpg'
        
        },
        {
            title : 'Hats',
            id:5,
            size:'large',
            imageUrl:'https://www.norcostco.com/ProductImages/detail/6051_2.jpg'
        
        }
    ]}
    
  render() {
    return (
      <div>
        <div className="homepage">
        <div className="dirctory-menu">
            {this.state.secvtion.map((prod)=>(
                
                <MenuItem size={prod.size} imageUrl={prod.imageUrl} key={prod.id}  title={prod.title.toUpperCase()} subtitle="SHOP NOW"/>
            
            ))}
           
        </div>
    </div>
      </div>
    )
  }
}


 