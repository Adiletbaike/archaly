import React from "react";

const ContactForm = () => {
  return (
    <section className="text-gray-600 body-font relative bg-[url('https://quranonline.com/wp-content/uploads/2021/06/How-Reading-The-Holy-Quran-Benefits-Your-Life.jpg')] bg-cover">
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-green-700 bg-opacity-60 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-white text-lg mb-1 font-medium title-font ">
            Cуроолор боюнча 
          </h2>
          <div className="relative mb-4 ">
            <label htmlFor="email" className="leading-7 text-sm text-white ">
              Телефон номер
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="+996000000000"
              className="w-full bg-transparent rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-200"
            />
          </div>
          <div className="relative mb-4">
            <label for="message" className="leading-7 text-sm text-white">
              Суроо
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full  bg-transparent rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded text-lg">
            Жөнөтүү
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
