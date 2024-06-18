import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import AnimatedButton from "../Button/AnimatedButton";

export default function CardSlider() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const cardData = [
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      price: "49.9",
      title: "Classic oversized hoodie",
      location: "ADIDAS",
      rating: "*****",
      description: "This is a classic oversized hoodie from Adidas.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      price: "49.9",
      title: "Classic oversized hoodie",
      location: "ADIDAS",
      rating: "*****",
      description: "This is a classic oversized hoodie from Adidas.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      price: "49.9",
      title: "Classic oversized hoodie",
      location: "ADIDAS",
      rating: "*****",
      description: "This is a classic oversized hoodie from Adidas.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      price: "49.9",
      title: "Classic oversized hoodie",
      location: "ADIDAS",
      rating: "*****",
      description: "This is a classic oversized hoodie from Adidas.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      price: "49.9",
      title: "Classic oversized hoodie",
      location: "ADIDAS",
      rating: "*****",
      description: "This is a classic oversized hoodie from Adidas.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      price: "49.9",
      title: "Classic oversized hoodie",
      location: "ADIDAS",
      rating: "*****",
      description: "This is a classic oversized hoodie from Adidas.",
    },
    // Add more card data as needed
  ];

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: Math.min(4, cardData.length), // Ensure that slidesToShow doesn't exceed the number of cards
    speed: 500,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-screen">
      <Slider ref={sliderRef} {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="p-4 w-screen">
            <Card
              image={card.image}
              price={card.price}
              title={card.title}
              location={card.location}
              rating={card.rating}
              description={card.description}
            />
          </div>
        ))}
      </Slider>
      <div className="flex justify-center gap-5 mt-4">
        <button className="btn-slider" onClick={previous}>
          Previous
        </button>
        <button className="btn-slider" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}
