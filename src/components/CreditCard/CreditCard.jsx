import React, { useEffect, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "aos/dist/aos.css";
import AOS from "aos";

const CreditCard = () => {
  useEffect(() => {
    AOS.init({ once: true }); // AOS'u başlat
  }, []);
  const [optima, setOptime] = useState("4169585355597583");
  const [mBank, setMBank] = useState("996507459540");
  const [copySuccess, setCopySuccess] = useState({
    optima: false,
    mBank: false,
  });

  const handleCopy = (text, cardType) => {
    setCopySuccess({ ...copySuccess, [cardType]: true });
    setTimeout(() => {
      setCopySuccess({ ...copySuccess, [cardType]: false });
    }, 3000);
  };

  return (
    <section
      className="bg-[url('/images/credit-bg.jpg')] bg-contain text-gray-600 body-font"
      id="rekvizit"
    >
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="2000"
        >
          <img
            className="object-cover object-center rounded lg:h-[400px] m-auto"
            alt="credit"
            src="/images/credit.png"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="2000"
          className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-center md:text-left items-center text-center"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 mx-auto font-hero text-gray-900">
            Банктык эсептер
          </h1>
          <div className="flex flex-wrap font-subHero gap-3 text-3xl w-full text-center items-center text-black">
            <div className="bg-black p-2 rounded-xl bg-opacity-25 w-[300px] mx-auto">
              <svg
                id="brand-logo-svg"
                className="logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 179 37"
              >
                <defs>
                  <style>
                    {`
            .b { fill: #fff; }
            .c, .dlogored { fill: #ec1c24; }
            .c, .e { fill-rule: evenodd; }
            .flogored, .dlogored { stroke: #fff; stroke-width: 0.87px; }
            .glogored { fill: #fefefe; }
          `}
                  </style>
                </defs>
                <path
                  className="blogoblack"
                  d="M47.37,24.62c4.8,0,8.49-3.69,8.49-8.16s-3.69-8.16-8.49-8.16-8.49,3.69-8.49,8.16,3.69,8.16,8.49,8.16Zm0-3.13c-2.79,0-5.03-2.23-5.03-5.03s2.23-5.03,5.03-5.03,5.03,2.23,5.03,5.03-2.23,5.03-5.03,5.03Z"
                ></path>
                <path
                  className="blogoblack"
                  d="M58.31,28.98h3.02v-6.26h.11s1.12,1.79,3.46,1.79c2.57,0,4.92-2.35,4.92-5.7s-2.35-5.7-4.92-5.7c-2.35,0-3.46,1.79-3.46,1.79h-.11v-1.56h-3.02v15.64Zm5.7-7.26c-1.56,0-2.79-1.23-2.79-2.91s1.23-2.91,2.79-2.91,2.79,1.23,2.79,2.91-1.23,2.91-2.79,2.91Z"
                ></path>
                <path
                  className="blogoblack"
                  d="M76.64,24.51c1.12,0,2.01-.34,2.01-.34v-2.79s-.56,.22-1.23,.22c-.89,0-1.45-.56-1.45-1.56v-3.69h2.46v-2.79h-2.46v-3.35h-2.68v2.01c0,.89-.45,1.34-1.23,1.34h-1.01v2.79h1.9v4.13c0,2.57,1.45,4.02,3.69,4.02Z"
                ></path>
                <path
                  className="blogoblack"
                  d="M81,24.29h3.02V13.34h-3.02v10.95Zm1.5-12.4c.96,0,1.74-.78,1.74-1.68s-.78-1.68-1.72-1.68-1.74,.78-1.74,1.68,.78,1.68,1.72,1.68Z"
                ></path>
                <path
                  className="blogoblack"
                  d="M86.92,24.29h3.02v-6.03c0-1.34,.89-2.23,2.12-2.23,1.12,0,1.79,.67,1.79,1.9v6.37h3.02v-6.03c0-1.34,.89-2.23,2.12-2.23,1.12,0,1.79,.67,1.79,1.9v6.37h3.02v-6.82c0-2.68-1.68-4.36-3.8-4.36-2.35,0-3.58,1.9-3.58,1.9h-.11s-.89-1.9-3.24-1.9c-2.12,0-3.02,1.79-3.02,1.79h-.11v-1.56h-3.02v10.95Z"
                ></path>
                <path
                  className="blogoblack"
                  d="M109.48,24.51c2.12,0,3.24-1.56,3.24-1.56h.11v1.34h3.02v-6.82c0-2.46-1.9-4.36-4.69-4.36s-4.47,2.12-4.47,2.12l1.79,1.79s.89-1.23,2.46-1.23c1.12,0,1.79,.67,1.9,1.45l-3.46,.63c-2.01,.36-3.24,1.72-3.24,3.51s1.34,3.13,3.35,3.13Zm1.01-2.46c-.89,0-1.34-.45-1.34-1.12,0-.56,.45-.98,1.23-1.12l2.46-.45v.22c0,1.45-1,2.46-2.35,2.46Z"
                ></path>
                <path
                  className="blogored"
                  d="M119.93,24.29h7.04c3.35,0,5.36-2.01,5.36-4.47,0-3.02-2.9-3.8-2.9-3.8,0,0,2.12-.78,2.12-3.24,0-2.23-1.9-4.13-5.03-4.13h-6.59v15.64Zm3.35-2.91v-3.8h3.46c1.34,0,2.12,.78,2.12,1.9s-.78,1.9-2.12,1.9h-3.46Zm0-6.7v-3.13h3.02c1.12,0,1.79,.67,1.79,1.56s-.67,1.56-1.79,1.56h-3.02Z"
                ></path>
                <path
                  className="blogored"
                  d="M137.6,24.51c2.12,0,3.24-1.56,3.24-1.56h.11v1.34h3.02v-6.82c0-2.46-1.9-4.36-4.69-4.36s-4.47,2.12-4.47,2.12l1.79,1.79s.89-1.23,2.46-1.23c1.12,0,1.79,.67,1.9,1.45l-3.46,.63c-2.01,.36-3.24,1.72-3.24,3.51s1.34,3.13,3.35,3.13Zm1.01-2.46c-.89,0-1.34-.45-1.34-1.12,0-.56,.45-.98,1.23-1.12l2.46-.45v.22c0,1.45-1.01,2.46-2.35,2.46Z"
                ></path>
                <path
                  className="blogored"
                  d="M146.87,24.29h3.02v-5.81c0-1.45,1.01-2.46,2.35-2.46,1.23,0,2.01,.78,2.01,2.12v6.15h3.02v-6.59c0-2.79-1.79-4.58-4.02-4.58s-3.24,1.79-3.24,1.79h-.11v-1.56h-3.02v10.95Z"
                ></path>
                <path
                  className="blogored"
                  d="M160.27,24.29h3.02v-2.57l1.45-1.68,2.79,4.25h3.46l-4.25-6.37,4.02-4.58h-3.58l-3.91,4.47V8.64h-3.02v15.64Z"
                ></path>
                <path
                  className="flogored"
                  d="M13.74,16.59h0L10.58,3.39l-.13-.54-.49,.26C4.82,5.78,1.3,11.15,1.3,17.35s3.51,11.57,8.65,14.24l.49,.26,.13-.54,3.16-13.2h0c.12-.5,.12-1.02,0-1.52Z"
                ></path>
                <path
                  className="dlogored"
                  d="M17.66,1.3h0c-2.72-.05-5.29,.58-7.55,1.72l-.58,.29,.49,.42,15.73,13.61-15.73,13.61-.49,.42,.58,.29c2.17,1.1,4.63,1.72,7.23,1.72,8.98,0,16.23-7.37,16.05-16.4h0c-.18-8.56-7.18-15.54-15.73-15.7Z"
                ></path>
                <path
                  className="glogored"
                  d="M17.35,0c4.79,0,9.13,1.94,12.27,5.08,3.14,3.14,5.08,7.48,5.08,12.27s-1.94,9.12-5.08,12.26h0c-3.14,3.15-7.48,5.09-12.26,5.09s-9.13-1.94-12.27-5.08C1.94,26.48,0,22.14,0,17.35S1.94,8.22,5.08,5.09h0C8.22,1.94,12.56,0,17.35,0h0Zm10.91,6.44c-2.79-2.79-6.65-4.52-10.91-4.52S9.23,3.65,6.44,6.44C3.65,9.23,1.92,13.09,1.92,17.35s1.73,8.12,4.52,10.91c2.79,2.79,6.65,4.52,10.91,4.52s8.12-1.73,10.91-4.52h0c2.79-2.79,4.52-6.65,4.52-10.91s-1.73-8.12-4.52-10.91Z"
                ></path>
                <path
                  className="glogored"
                  d="M13.04,17.35l-3.5,14.75,17.35-14.75L9.54,2.6l3.5,14.75Z"
                ></path>
                <path d="M.87,17.35c0,6.37,3.51,11.92,8.67,14.75h0l3.47-14.75H.87Z"></path>
                <path
                  className="e"
                  d="M9.52,2.61C4.37,5.45,.87,10.98,.87,17.35H13.01L9.54,2.61h-.02Z"
                ></path>
                <path
                  className="c"
                  d="M26.66,17.35h7.18C33.83,8.25,26.46,.87,17.36,.87c-2.83,0-5.49,.72-7.82,1.97l.02,.07,17.09,14.44h0Z"
                ></path>
                <path
                  className="c"
                  d="M26.66,17.35L9.56,31.78l-.02,.08c2.33,1.26,4.99,1.97,7.82,1.97,9.1,0,16.47-7.38,16.47-16.48h-7.18Z"
                ></path>
              </svg>
              <div className="flex justify-around items-center">
                <p className="ml-6">{optima}</p>
                <CopyToClipboard
                  text={optima}
                  onCopy={() => handleCopy(optima, "optima")}
                >
                  {copySuccess.optima ? (
                    <FaCheck className="text-[30px] text-gray-700 border border-gray-700 rounded-lg p-1 cursor-pointer" />
                  ) : (
                    <MdContentCopy className="text-[30px] text-gray-700 border border-gray-700 rounded-lg p-1 cursor-pointer" />
                  )}
                </CopyToClipboard>
              </div>
            </div>
            <div className="bg-black p-2 rounded-xl bg-opacity-25 w-[300px] mx-auto  h-[110px]">
              <img
                src="/images/mbank.svg"
                alt=""
                style={{ height: "40px" }}
                className="mx-auto"
              />
              <div className="flex justify-around items-center mt-4">
                <p className="mx-auto no-underline">{mBank}</p>
                <CopyToClipboard
                  text={mBank}
                  onCopy={() => handleCopy(mBank, "mBank")}
                >
                  {copySuccess.mBank ? (
                    <FaCheck className="text-[30px] text-gray-700 border border-gray-700 rounded-lg p-1 cursor-pointer " />
                  ) : (
                    <MdContentCopy className="text-[30px] text-gray-700 border border-gray-700 rounded-lg p-1 cursor-pointer" />
                  )}
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCard;
