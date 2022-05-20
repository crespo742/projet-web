import React from 'react';

const ProductImg = (props) => {
    return (
        <div className="product__img">
            <img src={`http://localhost:1337${props.url}`} height="500px" width="500px"/>
        </div>
    );
}

export default ProductImg;
