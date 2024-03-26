import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-center  text-gray-900 body-font h-screen"
      id="hero"
    >
      <div className="container  mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow text-center md:w-1/2 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center">
          <h1 className="title-font text-center font-hero sm:text-7xl text-3xl mb-4 font-medium text-gray-900">
            "Арчалы"
            <br className="inline-block" />
            Куран жаттоо медресеси
          </h1>
          <p className="bg-white bg-opacity-50 rounded-lg p-2 md:mt-12 mb-6 leading-relaxed text-xl  text-gray-950 font-bold font-subHero">
            «Силердин эң жакшыңар - куранды үйрөнүп аны башкаларга
            үйрөткөнүңөр.»
          </p>
          <p className="bg-white bg-opacity-50 rounded-lg p-2 leading-relaxed text-xl text-gray-950 font-bold font-subHero">
            «Балдарга куран үйрөткүлө, куран - аларга баарын үйрөтөт.»
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
