// HeroImages.js

import React from "react";
import HeroSlider from "./HeroSlider";

const HeroImages = () => {
  const slide = [
    {
      image: "/images/IMG_1.JPG",
      title: "Арчалы",
      description: "«Силердин эң жакшыңар - куранды үйрөнүп аны башкаларга үйрөткөнүңөр.»",
    },
    {
      image: "/images/IMG_2.JPG",
      title: "Арчалы",
      description: "«Балдарга куран үйрөткүлө, куран - аларга баарын үйрөтөт.»",
    },
    {
        image: "/images/IMG_3.JPG",
        title: "Арчалы",
        description: "«Силердин эң жакшыңар - куранды үйрөнүп аны башкаларга үйрөткөнүңөр.»",
      },
  ];

  return <HeroSlider slides={slide} />;
};

export default HeroImages;
