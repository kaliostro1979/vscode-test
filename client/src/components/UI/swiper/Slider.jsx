import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

const Slider = ({data, Component, callBack}) => {

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => {}}
            onSwiper={(swiper) => {}}
        >
            {
                data.map((item, index)=>{
                    return <SwiperSlide key={item._id ? item._id : index * Math.random()}>
                        <Component data={item} index={index} callBack={callBack}/>
                    </SwiperSlide>
                })
            }
        </Swiper>
    );
};

export default Slider;
