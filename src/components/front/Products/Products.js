import React from "react";
import "./Products.css";
const Products = ({ productItems, handleAddProduct }) => {
  return (
    <div className="products">
      {productItems.map((productItem) => (
        <div className="card">
          <div>
            <img
              className="product-image"
              src={productItem.image}
              alt={productItem.name}
            />
          </div>
          <div>
            <h3 className="product-name">{productItem.name}</h3>
          </div>
          <div className="description"> 
            <h4>Informação Nutricional</h4>
            <h5>Porção 100g</h5>
            <p>Calorias: {productItem.nutritions.calories} kcal</p>
            <p>Carboidratos: {productItem.nutritions.carbohydrates}g</p>
            <p>Proteinas: {productItem.nutritions.protein}g</p>
            <p>Gorduras: {productItem.nutritions.fat}g</p>
            <p>Açúcares: {productItem.nutritions.sugar}g</p>
          </div>

          <div className="product-price">Preço R${productItem.price}</div>

          <div>
            <button
              className="product-add-button"
              onClick={() => handleAddProduct(productItem)}
            >
              Adicione ao carrinho
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
