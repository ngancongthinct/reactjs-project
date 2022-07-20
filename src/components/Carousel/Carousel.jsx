import React from "react";
import PropTypes from "prop-types";
import "./Carousel.scss";
import CarouselItem from "./CarouselItem/CarouselItem";

SearchSuggestionRectangle.propTypes = {};

function SearchSuggestionRectangle(props) {
  return (
    <div className="snap-x flex">
      <div className="snap-start">
        <CarouselItem />
      </div>
      <div className="snap-start">
        <CarouselItem />
      </div>
      <div className="snap-start">
        <CarouselItem />
      </div>
      <div className="snap-start">
        <CarouselItem />
      </div>
    </div>
  );
}

export default SearchSuggestionRectangle;
