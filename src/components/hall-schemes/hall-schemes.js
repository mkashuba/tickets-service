import React, { Fragment } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './hall-schemes.css';

import smhall from '../../assets/img/sm-hall.png';
import bghall from '../../assets/img/bg-hall.png';


const NextArrow = (props) => {
    const { style, onClick } = props;

    const className = "right-arrow fas fa-chevron-right";

    return (
      <i
        className={className}
        style={{...style, display: "flex"}}
        onClick={onClick}
      />
    );
}

const PrevArrow = (props) => {
    const { style, onClick } = props;

    const className = 'left-arrow fas fa-chevron-left';

    return (
      <i
        className={className}
        style={{...style, display: "flex"}}
        onClick={onClick}
      />
    );
}
 
const HallSchemes = () => {

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (

    <Fragment>
        <div class="container">
            <div class="row justify-content-end">
                <div class="col d-flex justify-content-center">
                    <span class="main-title">Halls Schemes</span>
                </div>
            </div>
        </div>

        <div class="container mt-4">
            <div class="row">
                <div class="col">
                    <Slider {...settings}>
                        <div>
                            <img src={smhall} alt="hall-scheme"/>
                        </div>
                        <div>
                            <img src={bghall} alt="hall-scheme"/>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    </Fragment>
    
  );
}

export default HallSchemes;