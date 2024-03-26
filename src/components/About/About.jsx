import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section
      className="bg-[url('/images/counter-bg.jpg')] body-font relative "
      id="about"
    >
      <div className="container px-2 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-hero">
            Биз жөнүндө
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-subHero">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eos dignissimos quo error sapiente. Modi blanditiis, commodi impedit
            dolorem tempora alias recusandae vel labore quia officia, odit, ex
            praesentium deleniti. Consequatur natus labore aliquam molestiae,
            sit saepe accusantium ad laboriosam harum nemo quas placeat, nobis
            commodi qui dolorum voluptatum. Accusantium, ut? Quis ut libero
            ullam nulla commodi nemo voluptas vitae.
          </p>
        </div>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="flex flex-wrap  m-0 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {counterOn && (
                  <CountUp start={0} end={20} duration={2} delay={0} />
                )}
              </h2>
              <p className="leading-relaxed font-subHero text-xl font-bold">
                Мугалим
              </p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {counterOn && (
                  <CountUp start={0} end={18} duration={2} delay={0} />
                )}
              </h2>
              <p className="leading-relaxed font-subHero text-xl font-bold">
                Окуучу
              </p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}
              </h2>
              <p className="leading-relaxed font-subHero text-xl font-bold">
                Бүтүрүүчү
              </p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {counterOn && (
                  <CountUp start={0} end={4} duration={2} delay={0} />
                )}
              </h2>
              <p className="leading-relaxed font-subHero text-xl font-bold">
                Устаз
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default About;
