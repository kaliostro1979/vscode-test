import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setActiveImage, setActiveIndex} from "../../redux/slices/products.slice";

const ImageThumbsItem = ({data, index}) => {
    const activeIndex = useSelector(state => state.main.shoppingCart.activeIndex)
    const dispatch = useDispatch()

    const handleClick = (data, index)=>{
        dispatch(setActiveImage(data))
        dispatch(setActiveIndex(index))
    }

    return (
        <div className={activeIndex === index ? "ProductImagesThumbsItem Active" : "ProductImagesThumbsItem"}>
            <img
                src={`${process.env.REACT_APP_IMAGE_PATH}` + data.filename}
                alt={data.filename}
                onClick={()=>handleClick(data, index)}
            />
        </div>
    );
};

export default ImageThumbsItem;
