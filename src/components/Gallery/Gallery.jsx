import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { RiCloseCircleLine } from "react-icons/ri";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery = () => {
  const images = [
    { id: 1, src: "/images/IMG_1.JPG", alt: "Image 1" },
    { id: 2, src: "/images/IMG_2.JPG", alt: "Image 2" },
    { id: 3, src: "/images/IMG_3.JPG", alt: "Image 3" },
    { id: 4, src: "/images/IMG_1.JPG", alt: "Image 1" },
    { id: 5, src: "/images/IMG_2.JPG", alt: "Image 2" },
    { id: 6, src: "/images/IMG_3.JPG", alt: "Image 3" },
    // Add more images as needed
  ];

  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openCarousel = (index) => {
    setSelectedImageIndex(index);
    setShowCarousel(true);
  };

  const closeCarousel = () => {
    setShowCarousel(false);
  };

  return (
    <>
      <section className="bg-[url('/images/credit-bg.jpg')] bg-contain body-font" id="gallery">
        {/* Gallery Title */}
        <div className="flex flex-col text-center w-full pt-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-hero">
            Cүрөттөр
          </h1>
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-2">
            {images.map((image, index) => (
              <div key={image.id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="cursor-pointer w-full h-auto rounded-lg"
                  onClick={() => openCarousel(index)}
                />
              </div>
            ))}
          </div>

          {/* Carousel Modal */}
          {showCarousel && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="relative max-w-3xl max-h-3/4">
                <Carousel
                  selectedItem={selectedImageIndex}
                  showArrows={true}
                  showStatus={false}
                  showIndicators={false}
                  onChange={(index) => setSelectedImageIndex(index)}
                >
                  {images.map((image) => (
                    <div key={image.id}>
                      <img src={image.src} alt={image.alt} />
                    </div>
                  ))}
                </Carousel>
                <button
                  className="absolute top-4 right-4 bg-green-400 rounded-full text-white text-3xl focus:outline-none items-center"
                  onClick={closeCarousel}
                >
                  <RiCloseCircleLine/>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;
