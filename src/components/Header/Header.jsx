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
    <header className="bg-green-900 bg-opacity-40 bg-top body-font" id="header">
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
          className="text-3xl absolute text-bgGreen right-8 top-10 cursor-pointer md:hidden"
        >
          {open ? <RiCloseCircleLine /> : <RiMenu4Fill />}
        </div>
        <nav
          className={`md:ml-auto md:mr-auto absolute md:static flex font-bold flex-col md:flex-row font-hero items-center text-xl cursor-pointer justify-center ${
            open
              ? "right-10 bg-green-700 gap-4 p-2 top-24 bg-opacity-90 w-80 rounded-lg transition-all duration-500 ease-in-out"
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

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-0 border border-green-700 rounded-lg py-1 px-2 bg-gray-400 justify-center sm:justify-start">
            <a
              className="text-black md:text-bgGreen"
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
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
