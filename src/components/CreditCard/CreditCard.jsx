import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CreditCard = () => {
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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded lg:h-[400px] m-auto"
            alt="credit"
            src="/images/credit.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-center md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 mx-auto font-hero text-gray-900">
            Банктык эсептер
          </h1>
          <div className="flex flex-wrap font-subHero gap-3 text-3xl w-full text-center items-center text-black">
            <div className="bg-black p-2 rounded-xl bg-opacity-25 w-[300px] mx-auto">
              <div className="flex justify-around items-center">
                <h4> Оптима Банк</h4>
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
              <p>{optima}</p>
            </div>
            <div className="bg-black p-2 rounded-xl bg-opacity-25 w-[300px] mx-auto">
              <div className="flex justify-around items-center">
                <h4>Mбанк</h4>
                <CopyToClipboard
                  text={mBank}
                  onCopy={() => handleCopy(mBank, "mBank")}
                >
                  {copySuccess.mBank ? (
                    <FaCheck className="text-[30px] text-gray-700 border border-gray-700 rounded-lg p-1 cursor-pointer" />
                  ) : (
                    <MdContentCopy className="text-[30px] text-gray-700 border border-gray-700 rounded-lg p-1 cursor-pointer" />
                  )}
                </CopyToClipboard>
              </div>
              <p className="mx-auto no-underline">{mBank}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCard;
