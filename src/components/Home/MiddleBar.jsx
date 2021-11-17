import React from "react";
import { Carousel } from "react-bootstrap";
import carouselImg from "../../assets/images/carouselImg.svg";

function MiddleBar() {
  return (
    <div className="Carousel__container">
      <Carousel className="h-100">
        {/* <Carousel.Item className="CarouselItem">
          <img
            src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80"
            alt=""
            className="d-block w-100 h-100 imgSize"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item> */}

        {/* <Carousel.Item className="CarouselItem">
          <img
            src="https://images.pexels.com/photos/6478816/pexels-photo-6478816.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
            className="d-block w-100 h-100 imgSize"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item> */}

        <Carousel.Item className="CarouselItem">
          <img
            src={carouselImg}
            alt=""
            className="d-block w-100 h-100 imgSize"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="CarouselItem">
          <img
            src={carouselImg}
            alt=""
            className="d-block w-100 h-100 imgSize"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MiddleBar;
