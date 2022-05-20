import React from 'react';

const ProductImg = (props) => {
    return (
        <div className="product__img">
            <img src={`http://localhost:1337${props.product.attributes.image.data.attributes.url}`} alt={props.product.attributes.title} />
        </div>
    );
}

export default ProductImg;
