import React from 'react';

const ProductDescription = (props) => {
    return (
        <div className="product__price">
            {props.description}
        </div>
    );
}

export default ProductDescription;
