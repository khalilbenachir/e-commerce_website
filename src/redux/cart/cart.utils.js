export const addItemToCart=(cartItems,itemtoadd)=>{
    const existingCartItem=cartItems.find(
        cartItem=>cartItem.id===itemtoadd.id
  );

  if(existingCartItem){
      return cartItems.map((cartItem)=>
          cartItem.id===itemtoadd.id?
          {...cartItem,quantity:cartItem.quantity+1}:
          cartItem
      )
  }

  return [...cartItems,{...itemtoadd,quantity:1}]
};