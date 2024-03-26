import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-800 body-font" id="footer">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            className="flex cursor-pointer title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <img src="/logo.png" width="120" alt="" />
          </Link>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium uppercase text-gray-300 tracking-widest text-sm mb-3">
              Категориялар
            </h2>
            <nav className="list-none mb-10 cursor-pointer">
              <li>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  className="text-gray-600 hover:text-gray-300"
                >
                  Башкы бет
                </Link>
              </li>
              <li>
                <Link
                  to="rekvizit"
                  spy={true}
                  smooth={true}
                  className="text-gray-600 hover:text-gray-300"
                >
                  Реквизит
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  className="text-gray-600 hover:text-gray-300"
                >
                  Биз жөнүндө
                </Link>
              </li>
              <li>
                <Link
                  to="teacher"
                  spy={true}
                  smooth={true}
                  className="text-gray-600 hover:text-gray-300"
                >
                  Мугалимдер
                </Link>
              </li>
              <li>
                <Link
                  to="news"
                  spy={true}
                  smooth={true}
                  className="text-gray-600 hover:text-gray-300"
                >
                  Жаңылыктар
                </Link>
              </li>
              <li>
                <Link
                  to="gallery"
                  spy={true}
                  smooth={true}
                  className="text-gray-600 hover:text-gray-300"
                >
                  Галерия
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  className="text-gray-600 hover:text-gray-300"
                >
                  Байланыш
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium uppercase text-gray-300 tracking-widest text-sm mb-3">
              Байланыш
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="https://www.facebook.com/archaly.medresesi"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/archaly_medresesi"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-300">
                  Кочок көчөсү, 88a
                </a>
              </li>
              <li>
                <a
                  href="tel:996507459540"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-300"
                >
                  +996 507 45 95 40
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium uppercase text-gray-300 tracking-widest text-sm mb-3">
              Реквизит
            </h2>
            <nav className="list-none mb-10 text-gray-600 ">
              <p className="hover:text-gray-300">Оптима банк - 4169 5853 5559 7583</p>
              <p className="hover:text-gray-300">Mбанк - +996 507 45 95 40</p>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © "Арчалы" медресеси
            <a
              href="https://www.instagram.com/archaly_medresesi/"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
              previewlistener="true"
            >
              @archaly_medresesi
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              className="text-gray-500"
              href="https://www.facebook.com/archaly.medresesi"
              target="_blank"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-500"
              href="https://www.instagram.com/archaly_medresesi"
              target="_blank"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
