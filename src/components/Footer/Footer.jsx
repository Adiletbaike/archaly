import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-800 body-font" id="footer">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="2000"
        className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
      >
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
                  href="https://www.facebook.com/people/%D0%90%D1%80%D1%87%D0%B0%D0%BB%D1%8B-%D0%9C%D0%B5%D0%B4%D1%80%D0%B5%D1%81%D0%B5%D1%81%D0%B8/61552654507901/?mibextid=ZbWKwL"
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
                <a
                  href="https://www.tiktok.com/@archaly_medresesi?_t=8leMLM2eZ8b&_r=1"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-300"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="mailto:archalymedresesi@gmail.com"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-300"
                >
                  Электрондук адрес
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-300"
                  href="https://www.google.com/maps/place/%22Archaly%22+Kuran+Zhattoo+Medresesi/@42.7406822,74.5012824,16z/data=!4m6!3m5!1s0x389ecb477c07f70d:0x5f927192e5b89320!8m2!3d42.7406815!4d74.5060433!16s%2Fg%2F11t1544n90?entry=ttu"
                  target="_blank"
                >
                  Көчөк көчөсү, 88a
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
              <p className="hover:text-gray-300">
                Оптима банк - 4169 5853 5559 7583
              </p>
              <p className="hover:text-gray-300">Mбанк - 996 507 45 95 40</p>
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
              href="https://www.facebook.com/people/%D0%90%D1%80%D1%87%D0%B0%D0%BB%D1%8B-%D0%9C%D0%B5%D0%B4%D1%80%D0%B5%D1%81%D0%B5%D1%81%D0%B8/61552654507901/?mibextid=ZbWKwL"
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
            <a
              className="ml-3 text-gray-500"
              href="https://www.tiktok.com/@archaly_medresesi?_t=8leMLM2eZ8b&_r=1"
              target="_blank"
            >
              <svg
                width="18px"
                height="20px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
