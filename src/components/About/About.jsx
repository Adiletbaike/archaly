import React from "react";

const About = () => {
  return (
    <section class="body-font relative bg-green-50">
      <div class="container px-2 py-10 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-hero">
            Биз жөнүндө
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base font-subHero">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eos dignissimos quo error sapiente. Modi blanditiis, commodi impedit
            dolorem tempora alias recusandae vel labore quia officia, odit, ex
            praesentium deleniti. Consequatur natus labore aliquam molestiae,
            sit saepe accusantium ad laboriosam harum nemo quas placeat, nobis
            commodi qui dolorum voluptatum. Accusantium, ut? Quis ut libero
            ullam nulla commodi nemo voluptas vitae.
          </p>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              20
            </h2>
            <p class="leading-relaxed font-subHero text-xl font-bold">
              Мугалим
            </p>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              18
            </h2>
            <p class="leading-relaxed font-subHero text-xl font-bold">Окуучу</p>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              35
            </h2>
            <p class="leading-relaxed font-subHero text-xl font-bold">
              Бүтүрүүчү
            </p>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              4
            </h2>
            <p class="leading-relaxed font-subHero text-xl font-bold">Устаз</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
