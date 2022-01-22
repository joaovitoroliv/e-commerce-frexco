import React from "react";
import "./Cart.css";

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  // Calcular preço total
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-items">
      <h2 className="cart-items-header">Carrinho</h2>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleCartClearance}>Limpar Carrinho</button>
        )}
      </div>
      
      {cartItems.length === 0 && (
        <div className="cart-items-empty"> O Carrinho está vazio</div>
      )}

      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img
              className="cart-items-image"
              src={item.image}
              alt={item.name}
            />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price">
              {item.quantity} * R${item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-items-total-price-name">
        Total&nbsp;
        <div className="cart-items-total-price">R${totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
