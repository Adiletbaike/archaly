import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { RiMenu4Fill } from "react-icons/ri";
import { RiCloseCircleLine } from "react-icons/ri";

const Header = () => {
  useEffect(() => {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });
  }, []);

  const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <header
      className="bg-green-900 bg-opacity-40 bg-top body-font block"
      id="header"
    >
      <div>
        <p className="bg-white bg-opacity-50 tracking-widest flex justify-center text-xs p-1 text-center md:text-sm">
          Кыргызстан республикасы, Аламүдүн району, Арчалы айылы, Көчөк көчөсү,
          88а
        </p>
      </div>
      <div className="container mx-auto flex flex-wrap p-2 md:flex-row items-center">
        <Link
          spy={true}
          smooth={true}
          to="header"
          className="flex title-font font-medium items-center text-gray-900 ml-1 my-1  md:mb-0"
        >
          <img src="/logo.png" width="80" alt="" />
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute text-bgGreen right-8 top-18 cursor-pointer md:hidden"
        >
          {open ? <RiCloseCircleLine /> : <RiMenu4Fill />}
        </div>
        <nav
          className={`md:ml-auto z-50 md:mr-auto absolute md:static flex font-bold flex-col md:flex-row font-hero items-center text-xl cursor-pointer justify-center ${
            open
              ? "right-10 bg-green-700 gap-4 p-2 top-36 bg-opacity-90 w-80 rounded-lg transition-all duration-500 ease-in-out"
              : "right-[-1000px] transition-all gap-4 top-24 duration-1000 ease-in-out hidden md:flex"
          }`}
        >
          <Link
            spy={true}
            smooth={true}
            to="hero"
            className="mr-0 md:mr-5 hover:text-bgGreen"
            onClick={closeMenu}
          >
            Башкы бет
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="rekvizit"
            className="mr-0 md:mr-5 hover:text-bgGreen"
            onClick={closeMenu}
          >
            Реквизит
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="about"
            className="mr-0 md:mr-5 hover:text-bgGreen"
            onClick={closeMenu}
          >
            Биз жөнүндө
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="teacher"
            className="mr-0 md:mr-5 hover:text-bgGreen"
            onClick={closeMenu}
          >
            Мугалимдер
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="news"
            className="mr-0 md:mr-5 hover:text-bgGreen"
            onClick={closeMenu}
          >
            Жаңылыктар
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="gallery"
            className="mr-0 md:mr-5 hover:text-bgGreen"
            onClick={closeMenu}
          >
            Галерия
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="footer"
            className="mr-0 md:mr-5 hover:text-bgGreen"
            onClick={closeMenu}
          >
            Байланыш
          </Link>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-0 border border-green-700 rounded-lg py-1 px-2 bg-green-600 bg-opacity-90 justify-center sm:justify-start">
            <a
              className="text-black md:text-bgGreen"
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
              className="ml-3 text-black md:text-bgGreen"
              href="https://www.instagram.com/archaly_medresesi/"
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
              className="ml-3 text-black md:text-bgGreen"
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
