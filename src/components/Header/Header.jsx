import React, { useState } from "react";

const Header = () => {
  return (
    <header className="bg-[url('/images/hero.jpg')] bg-top body-font">
      <div className="container mx-auto flex flex-wrap p-2 md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-1 md:mb-0">
          <img src="/logo.png" width="80" alt="" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap font-hero items-center text-xl cursor-pointer justify-center">
          <a className="mr-5 hover:text-gray-900">Башкы бет</a>
          <a className="mr-5 hover:text-gray-900">Реквизит</a>
          <a className="mr-5 hover:text-gray-900">Биз жөнүндө</a>
          <a className="mr-5 hover:text-gray-900">Мугалимдер</a>
          <a className="mr-5 hover:text-gray-900">Жаңылыктар</a>
          <a className="mr-5 hover:text-gray-900">Галерия</a>
          <a className="mr-5 hover:text-gray-900">Байланыш</a>
        </nav>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a class="text-bgGreen">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-bgGreen">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;
