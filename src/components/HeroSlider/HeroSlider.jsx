import React, { useState, useEffect } from "react";

const HeroSlider = ({ slides, hadith }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentHadithIndex, setCurrentHadithIndex] = useState(0);

  // Slayt geçişleri için ileri ve geri yönlü fonksiyonlar
  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const imageInterval = setInterval(() => {
      nextSlide(); 
    }, 5000); 
    return () => clearInterval(imageInterval);
  }, [currentSlide, slides.length]);

  useEffect(() => {
    const hadithInterval = setInterval(() => {
      const newIndex = (currentHadithIndex + 1) % hadith.length;
      setCurrentHadithIndex(newIndex);
    }, 4000); 
    return () => clearInterval(hadithInterval);
  }, [currentHadithIndex, hadith.length]);

  const currentSlideData = slides[currentSlide];
  const currentHadith = hadith[currentHadithIndex];

  return (
    <section className="relative h-[600px] md:h-screen overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full duration-1000 opacity-90 bg-cover bg-center text-gray-900 brightness-90"
        style={{
          backgroundImage: `url(${currentSlideData.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto w-2/3 h-full flex items-center justify-center ">
          <div className="text-center">
            {/* <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-hero text-green-800 leading-tight mb-24">
              {currentSlideData.title}
            </h1> */}
            <p className="bg-white bg-opacity-90 p-2 rounded-lg sm:text-xl md:text-3xl text-black font-subHero leading-none md:leading-relaxed mb-2 duration-1000 opacity-100">
              {currentHadith}
            </p>
          </div>
        </div>
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-xl bg-green-700 bg-opacity-50 px-2 py-2 rounded-lg"
        onClick={prevSlide}
      >
        <img src="/images/arrow-prev.png" alt="" style={{ width: '15px' }} />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-xl bg-green-700 bg-opacity-50 px-2 py-2 rounded-lg"
        onClick={nextSlide}
      >
        <img src="/images/arrow-next.png" alt="" style={{ width: '15px' }} />
      </button>
    </section>
  );
};

export default HeroSlider;
