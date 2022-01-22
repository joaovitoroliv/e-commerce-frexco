import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = ({cartItems}) => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Frexco
          </Link>
        </h1>
      </div>
      <div>
        <div className="header-links">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/signup">Cadastro</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/cart" className="cart">
                <i class="fas fa-shopping-cart"/>
                <span className='cart-length'>
                  {cartItems.length === 0 ? "" : cartItems.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
};

export default Header;
