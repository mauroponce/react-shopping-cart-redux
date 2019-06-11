import React from 'react'

export default function Basket(props) {
  const {cartItems} = props;
  return (
    <div className="alert alert-info">
      {
        cartItems.length === 0 ?
          "Basket is empty"
        :
          <div>You have {cartItems.length} products in the basket.</div>
      }
    </div>
  )
}
