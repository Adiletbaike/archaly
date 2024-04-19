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
          <p className="lg:w-4/5 mx-auto leading-relaxed text-base text-justify font-subHero">
          “Арчалы” - Куран жаттоо медресеси 2012-жылы кыргызстандык жергиликтүү болгон, эли-жерин сүйгөн, динге кызмат кылам деген бир туугандарыбыздын демилгеси менен ачылган. Окуу мөөнөтү - 3 жыл. “Арчалы” - Куран жаттоо медресеси  2012-жылдан бери биздин келечек муун болгон жаштарыбызга Куран жаттатып келет.  Мамлекеттин астындагы юстиция министирлигинен, ошондой эле Дин иштер комиссиясынан жана Муфтияттын алдында каттоодон өтүп, расмий иш алып барып келет. Медреседе жалпысынан 70 окуучу билим алат, медресебиздин багыты Куран жаттоого, каарыларды даярдоого багытталган. Бир гана Куран менен чектелбестен анын жанында кошумча илимдер окутулат, алар: фыкх, акыйда, хадис, тажвид илимдери. Андан сырткары, окуучуларыбызды ЖРТ/ОРТга даярдап математика, кыргыз тили, кыргыз адабияты сабактары окутулат. Бул сабактардан бизге сырттан билимдүү, тажрыйбалуу мугалимдер сабак берет. 
 Медресени бүткөндөн кийин биздин окуучулар жергиликтүү университеттерде жана чет мамлекеттерде, жогорку билим алуу үчүн окууларын улантат. Ушул убакытка чейин 2012-жылдан баштап медресени 100дөн ашуун окуучубуз аяктап, эң алды чет мамлекеттерде билим алып, илимдерин тереңдетип кайра медресеге келип, Куран илимин жана башка шарият илимдерин окуучуларыбызга окутуп, жигердүү кызмат кылышууда. Жараткан Алла Таала бардык салым кошкон, көмөк көрсөткөн бир туугандарыбыздан ыраазы болсун. Медресебизде окуп жаткан балдарыбыз келечекте мамлекеттин, элибиздин, жерибиздин, динибиздин керегине жарай турган ыймандуу жана илимдүү жаштардан болуусун Жараткан Алла Таала насип кылган болсун!!!
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
                  <CountUp start={0} end={2} duration={2} delay={0} />
                )}
              </h2>
              <p className="leading-relaxed font-subHero text-xl font-bold">
                Мугалим
              </p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {counterOn && (
                  <CountUp start={0} end={75} duration={2} delay={0} />
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
                  <CountUp start={0} end={8} duration={2} delay={0} />
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
