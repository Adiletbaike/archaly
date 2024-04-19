import React, { useState, useEffect } from "react";

const HeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Otomatik olarak bir sonraki slayta geç
    }, 5000); // Her 5 saniyede bir slaytı değiştir

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <section className="relative h-[600px] md:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-90" : "opacity-0"
          } bg-cover bg-center text-gray-900`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-hero text-green-800 leading-tight mb-24">
                {slide.title}
              </h1>
              <p className="bg-white bg-opacity-50 p-2 rounded-lg text-xl sm:text-2xl md:text-3xl text-green-800 font-subHero leading-relaxed mb-2">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-xl bg-green-700 bg-opacity-50 px-4 py-2 rounded-lg"
        onClick={prevSlide}
      >
        <img src="/images/arrow-prev.png" alt="" style={{width: '20px'}} />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-xl bg-green-700 bg-opacity-50 px-4 py-2 rounded-lg"
        onClick={nextSlide}
      >
        <img src="/images/arrow-next.png" alt="" style={{width: '20px'}} />
      </button>
    </section>
  );
};

export default HeroSlider;
