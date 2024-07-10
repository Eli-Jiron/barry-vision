/* eslint-disable no-unused-vars */
import Carousel from "react-multi-carousel";
import rightArrow from "../../assets/rightArrow.svg";
import leftArrow from "../../assets/leftArrow.svg";

const ProductCarousel = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite={true}
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-5-px"
      containerClass="carousel-container"
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      {children}
    </Carousel>
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button
      className="z-[5] absolute inline-block p-2 right-8 cursor-pointer opacity-90"
      onClick={() => onClick()}
    >
      <img src={rightArrow} alt="rightArrow" />
    </button>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button
      className="z-[5] absolute inline-block p-2 left-8 cursor-pointer opacity-90"
      onClick={() => onClick()}
    >
      <img src={leftArrow} alt="leftArrow" />
    </button>
  );
};

export default ProductCarousel;
