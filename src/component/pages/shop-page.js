import React, { Component } from 'react'
import './shop-page.scss';

import SHOP_DATA from '../shop-data';
import CollectionPreview from '../prview-collection/preview-collection';
 

class ShopPage extends Component {

  state={
    collections:SHOP_DATA
  }
  render() {
    const collections=this.state.collections;
    return (
      <div className='shop-page'>
        {collections
          .map((collection)=>(
            <CollectionPreview key={collection.id} title={collection.title.toUpperCase()} items={collection.items}/>
        ))}
      </div>
    )
  }
}

export default ShopPage;
