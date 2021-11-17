import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import phonesmall1 from "../../assets/images/phoneSmall47.svg";
// import phonesmall2 from "../../assets/images/phoneSmall45.svg";
// import imgPrev from "../../assets/images/prevLeft.svg";
// import phonesmall3 from "../../assets/images/phoneSmall46.svg";
// import nextImg from "../../assets/images/nextRight.svg";
import VariableImage from "../ImageCard/VariableImage";

// import CustomCard from "./card";

class Carousels extends React.Component {
  renderItems() {
    let cards = [];
    for (let i = 1; i <= this.props.count; i++) {
      cards.push(<VariableImage key={i}  Img={phonesmall1} altText="phoneSmall" className="h-100 w-100"/>);
    }
    return cards;
  }
  componentDidUpdate(prevProps) {
    if (this.props.count !== prevProps.count) {
      this.carouselRef.setState({
        currentSlide: 0,
        transform: 0
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.count !== nextProps.count) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <Carousel
        ref={node => (this.carouselRef = node)}
        additionalTransfrom={0}
        arrows
        centerMode
        containerClass=""
        draggable
        focusOnSelect={false}
        keyBoardControl
        minimumTouchDrag={80}
        responsive={{
          tablet: {
            breakpoint: {
              max: 9216,
              min: 464
            },
            items: 2,
            paritialVisibilityGutter: 30
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {this.renderItems()}
      </Carousel>
    );
  }
}

export default Carousels;
