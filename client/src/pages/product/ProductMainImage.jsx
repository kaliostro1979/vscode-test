import React from 'react';
import {useSelector} from "react-redux";

const ProductMainImage = ({image}) => {
    const activeImage = useSelector(state => state.main.shoppingCart.activeImage)

    return (
        <div className={"ProductMainImage"}>
            <img
                src={`${process.env.REACT_APP_IMAGE_PATH}` + (activeImage ? activeImage.filename : image.filename)}
                alt={activeImage ? activeImage.filename : image.filename}/>
        </div>
    );
};

export default ProductMainImage;
