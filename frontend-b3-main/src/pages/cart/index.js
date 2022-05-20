import React, { useEffect, useState } from "react";
import Button from "../../components/Button";

const Index = () => {
  const [cart, setCart] = useState();

  const deleteCart = () => {
    localStorage.removeItem("cart");
    setCart(null);
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const decrementQty = (product) => {
    const indexOfExistingProduct = cart.findIndex((el) => el.id === product.id); 
    if (indexOfExistingProduct !== -1 && cart[indexOfExistingProduct].quantity > 1) {
        cart[indexOfExistingProduct].quantity -= 1;    
        localStorage.setItem("cart", JSON.stringify(cart));
        setCart(JSON.parse(localStorage.getItem('cart')));
    }
  };
  const incrementQty = (product) => {
    const indexOfExistingProduct = cart.findIndex((el) => el.id === product.id);
    if (indexOfExistingProduct !== -1) {
      cart[indexOfExistingProduct].quantity += 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(JSON.parse(localStorage.getItem('cart')));
  };

  const deleteProduct = (product) => {
    const filteredCart = cart.filter((item) => item.id != product.id);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
    setCart(filteredCart);
  };

  const renderTotalAmount = () => {
    return (
      <p>Montant total : {cart.reduce((total, product) => total + (product.quantity * product.price),0)} €</p>
    )
  }

  const renderTotalQty = () => {
    return cart.reduce((total, product) => total + product.quantity,0)
  }

  return (
    <div className="">
      {cart ? (
        <>
          <p>Vous avez {renderTotalQty()} produits dans votre panier</p>
          <table>
            
            <tbody>
              {cart.map((cartItem) => (
                <tr key={cartItem.id}>
                  <div class="shopping-cart">

					<div class="column-labels">
					<label class="product-image">Image</label>
					<label class="product-details">Product</label>
					<label class="product-price">Price</label>
					<label class="product-quantity">Quantity</label>
					<label class="product-removal">Remove</label>
					<label class="product-line-price">Total</label>
					</div>

					<div class="product">
					<div class="product-image">
						<img src={`http://localhost:1337${cartItem.url}`}/>
					</div>
					<div class="product-details">
						<div class="product-title">{cartItem.title}</div>
						
					</div>
					<div class="product-price">{cartItem.price}</div>
					<div class="product-quantity">
						<button onClick={() => decrementQty(cartItem)}>-</button>
							{cartItem.quantity}
						<button onClick={() => incrementQty(cartItem)}>+</button>
					</div>
					<div class="product-removal">
						<button class="remove-product" onClick={()=>deleteProduct(cartItem)}>Supprimer</button>
					</div>
					<div class="product-line-price">{(cartItem.price * cartItem.quantity).toFixed(2)}</div>
					</div>
					</div>
                </tr>
              ))}
            </tbody>
          </table>
          <Button
            title="Supprimer le panier"
            classes="btn btn__color-white"
            type="button"
            function={deleteCart}
          />
          {renderTotalAmount()}
        </>
      ) : (
        <p className="text__center">Votre panier est vide</p>
      )}
	  

    </div>
  );
};

export default Index;
