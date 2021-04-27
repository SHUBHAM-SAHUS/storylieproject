import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./reactCarousel.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export const ReactCarousel = () => {
  const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <div className="react-container">
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

