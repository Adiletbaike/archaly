import React from "react";

const Hero = () => {
  return (
    <section class="bg-[url('./public/images/hero.png')] bg-center  text-gray-600 body-font h-screen">
      <div class="container  mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow text-center md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font text-center font-hero sm:text-7xl text-3xl mb-4 font-medium text-gray-900">
            "Арчалы"
            <br class="hidden lg:inline-block" />
            Куран жаттоо медресеси
          </h1>
          <p class="mb-8 leading-relaxed text-xl  text-gray-950 font-bold font-subHero">
            «Силердин эң жакшыңар - куранды үйрөнүп аны башкаларга
            үйрөткөнүңөр.»
          </p>
          <p class="mb-8 leading-relaxed text-xl text-gray-950 font-bold font-subHero">
            «Балдарга куран үйрөткүлө, куран - аларга баарын үйрөтөт.»
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
