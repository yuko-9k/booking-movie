import React from "react";
import Slider from "react-slick";
import trangTiImg from "../../../staticFile/images/trang-ti-16194117174325.jpg";
import latMatImg from "../../../staticFile/images/lat-mat-48h-16177782153424.png";
import dietQuyImg from "../../../staticFile/images/ban-tay-diet-quy-evil-expeller-16177781815781.png";
import { Fragment } from "react";
import SimpleModal from "../../component/Modal/Modal";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        right: "0",
        zIndex: "2",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "0",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

export default function SlickCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const slideList = [
    {
      hinhAnh: trangTiImg,
      trailer: "https://www.youtube.com/embed/6nckGAdSqPY",
    },
    {
      hinhAnh: latMatImg,
      trailer: "https://www.youtube.com/embed/kBY2k3G6LsM",
    },
    {
      hinhAnh: dietQuyImg,
      trailer: "https://www.youtube.com/embed/uqJ9u7GSaYM",
    },
  ];
  return (
    <div className="slick-Carousel">
      <Slider {...settings}>
        {slideList.map((slide, index) => {
          return (
            <Fragment key={index}>
              <div style={{ position: "relative" }}>
                <img
                  src={slide.hinhAnh}
                  style={{ height: "90vh", width: "100%" }}
                />
                <SimpleModal url={slide.trailer} />
              </div>
            </Fragment>
          );
        })}
      </Slider>
    </div>
  );
}
