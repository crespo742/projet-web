import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TitlePage from "../../../components/TitlePage";
import ProductPrice from "../../../components/ProductPrice";
import Button from "../../../components/Button";
import productService from "../../../services/product.service";
import ProductImg from "../../../components/ProductImg";
import ProductDescription from "../../../components/ProductDescription";


const Index = () => {

  const router = useRouter();
  const [product, setProduct] = useState();

  useEffect(() => {
    if(!router.isReady) return;
    const id = router.query.id;
      productService.getProduct(id)
      .then((data) => {
        console.log(data.data.attributes,"DATA");
        console.log(data.data);
        setProduct(data.data);
      })
      .catch((err) => console.log(err));      
  }, [router.isReady]);

  const addTocart = (element) => {
    //On créé un nouvel object avec une nouvelle propriété quantity
    let productToInsert = {
      id: element.id,
      title: element.attributes.title,
      url: element.attributes.image.data.attributes.url,
      price: element.attributes.price,
      quantity: 1
    };
    
    const cartArray = [];

    //Si j'ai déjà un ou des produits dans mon localstorage
    if (localStorage.getItem("cart")) {

      const localStorageCart = JSON.parse(localStorage.getItem("cart"));
      localStorageCart.forEach((product) => {
        cartArray.push(product);
      });

      const indexOfExistingProduct = cartArray.findIndex((el) => el.id === element.id);

      if (indexOfExistingProduct !== -1) {
        cartArray[indexOfExistingProduct].quantity += 1;
      }
      else {
        cartArray.push(productToInsert);
      }
      localStorage.setItem("cart", JSON.stringify(cartArray));
    }
    //Si localstorage vide
    else {
      cartArray.push(productToInsert);
      localStorage.setItem("cart", JSON.stringify(cartArray));
    }
  };

  return (
    <div className="product_page">
      <TitlePage title="FootWear" />
      <TitlePage title={product && product.attributes.title} />
      <div className="text__center">
        <ProductImg url={product && product.attributes.image.data.attributes.url} />
        <ProductDescription description={product && product.attributes.description}/>
        <ProductPrice price={product && product.attributes.price} currency="€" />
        <Button
          type="button"
          classes="btn btn__color-black"
          function={() => addTocart(product)}
          title="ajouter au panier"
        />
      </div>
    </div>
  );
};

export default Index;
