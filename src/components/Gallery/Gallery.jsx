import React from "react";

const Gallery = () => {
  return (
    <section class="bg-green-50 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-hero">
            Cүрөттөр
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
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/500x300"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/501x301"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/600x360"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/601x361"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/502x302"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/503x303"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
