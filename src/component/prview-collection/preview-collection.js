import React from 'react';
import './preview-collection.scss';
import CollectionItem from '../collection-item/collection-item'



const CollectionPreview = (props)=>(

    <div className='collection-preview'>
        <h1 className='title'>{props.title}</h1>
        <div className='preview'>
            {
                props.items
                    .filter((item,index)=> index<4)
                    .map((item)=>
                        (
                            <CollectionItem key={item.id} item={item} />
                        )
                )
            }
        </div>

    </div>
);

export default CollectionPreview;