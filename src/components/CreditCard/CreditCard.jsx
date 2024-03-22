import React from "react";

const CreditCard = () => {
  return (
    <section class="bg-[url('/images/credit-bg.jpg')] text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded lg:h-[400px] m-auto"
            alt="credit"
            src="/images/credit.png"
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 mx-auto font-hero text-gray-900">
            Банктык эсептер
          </h1>
          <div className="flex flex-wrap font-subHero gap-3 text-4xl text-center text-black">
            <div className="bg-black p-2 rounded-xl bg-opacity-25">
              <h4> Оптима Банк</h4>
              <p>4169 5853 5559 7583</p>
            </div>
            <div className="bg-black p-2 rounded-xl bg-opacity-25">
              <h4>Mбанк</h4>
              <p className="mx-auto">+996 507 45 95 40</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCard;