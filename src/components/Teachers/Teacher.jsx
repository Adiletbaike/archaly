import React from "react";

const Teacher = () => {
  return (
    <section
      className="bg-[url('/images/credit-bg.jpg')] bg-contain bg-center body-font"
      id="teacher"
    >
      <div
        className="container px-5 py-10 mx-auto"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="2000"
      >
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-hero">
            Мугалимдер
          </h1>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg object-cover object-center mb-4"
                src="/images/1.png"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Абдишүкүр уулу Имран
                </h2>
                <h3 className="text-gray-500 mb-3">Мүдүр</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg object-cover object-center mb-4"
                src="/images/4.png"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Шамов Инаятулла
                </h2>
                <h3 className="text-gray-500 mb-3">Завуч</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg object-cover object-center mb-4"
                src="/images/2.png"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Шамов Рахматулла
                </h2>
                <h3 className="text-gray-500 mb-3">Куран мугалими</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg object-cover object-center mb-4"
                src="/images/3.png"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Шамов Сайфулла
                </h2>
                <h3 className="text-gray-500 mb-3">Куран мугалими</h3>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/5 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg object-cover object-center mb-4"
                src="/images/5.png"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Саттаров Одилжан
                </h2>
                <h3 className="text-gray-500 mb-3">Куран мугалими</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
