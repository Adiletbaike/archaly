import React, { useState } from "react";

// Haber verileri
const newsData = [
  {
    id: 1,
    imageSrc: "/images/IMG_1.JPG",
    title: "Устаздар",
    content:
      "Рамазан - ибадат кылуу жана жакшы иштерди жасоо үчүн эң жакшы ай болуп саналат. Себеби бул айда жакшы амалдардын сообу көбөйүп, бейиштин эшиктери ачылып, тозок эшиктери болсо жабылат. Күнөө жана жаман иштерди жасагандардын тобосу, ошондой эле пенделердин дубасын кабыл болот.Суроо: Орозо кармоочуларды ооз ачтырган адам кандай соопко ээ болот?      Зайда бин Халид аль-Джунхи (Аллах андан ыраазы болсун) Пайгамбарыбыздын ﷺ минтип айтканын кабарлайт: “Бир адам орозо кармаган бирөөнү сыйлап ооз ачтырса, орозо кармаган адамдын сообуна тете соопко ээ болот. Орозо кармаган адамдын сообунан да эч нерсе кемибейт”(ат-Тирмизи, ан- Насаи ж.б).      Бүгүн окуу жайыбыздын окуучулары жолдогу жөө жана унаада бараткан шаар тургундарына ооз ачуу үчүн суу таратты.",
    date: "22-04-2024",
  },
  {
    id: 2,
    imageSrc: "/images/IMG_2.JPG",
    title: "Устаздар",
    content:
      "Салам алейкум урматтуу мусулман бир туугандар , Арчалы медресебиздин студенттери окуу жайды бүтө элегинде эле Ыйык Куранды толук жаттап, учурда жер-жерлерде Тарави намазында катмы Куран окуп жатышат.Атап айтсак, Бишкек шаарында 2, Токмок шаарында 3, Жалал-Абад облусунда 6, Ысык-Көл облусунда 3, Нарын облусунда 3 студентибиз катмы Куран окуп жатышат. Токмок шаарындагы студенттерибиз бүгүн Куран катмыны бүтүрүштү.🤲🏻🤲🏻🤲🏻#Арчалы#куранжаттоо#медресеси",
    date: "21-04-2024",
  },
  {
    id: 3,
    imageSrc: "/images/IMG_3.JPG",
    title: "Устаздар",
    content:
      "أسلام عليكم و رحمة الله و بركاتة 🤲 Арчалы”медресесинде акыл таймашы болуп өттү! Окуган озот деп даанышман элибиз айткандай.Окуучуларбызды бир гана диний тармактан эмес,дүйнөлүк жактанда өздөрүн сынап көрүштү!!🤝✊ Уюштурган устаздардан Аллах ыраазы болсун",
    date: "20-04-2024",
  },
];

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  const handleCloseModal = () => {
    setSelectedNews(null);
  };

  return (
    <section className="text-gray-600 body-font" id="news">
      <div
        className="container px-5 py-12 mx-auto"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="2000"
      >
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-hero">
            Жаңылыктар
          </h1>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {newsData.map((news) => (
            <div key={news.id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={news.imageSrc}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                {news.title}
              </h2>
              <p className="text-base leading-relaxed mt-2">
                {news.content.split(" ").slice(0, 10).join(" ")}
                {selectedNews && selectedNews.id === news.id && (
                  <> {news.content.slice(10)} </>
                )}
              </p>
              <div className="flex justify-between">
                <a
                  className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer"
                  onClick={() => handleNewsClick(news)}
                >
                  Толугураак
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <p className="text-gray-400 text-sm mt-4">{news.date}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Modal */}
        {selectedNews && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
            <div className="bg-white p-8 rounded-lg max-w-md overflow-y-auto max-h-screen">
              <h2 className="text-xl font-medium title-font text-gray-900 mb-4">
                {selectedNews.title}
              </h2>
              <img
                src={selectedNews.imageSrc}
                alt=""
                className="rounded-lg mb-4"
              />
              <p className="text-base leading-relaxed text-justify">
                {selectedNews.content}
              </p>
              <p className="text-gray-400 text-sm mt-2">{selectedNews.date}</p>
              <div className="flex justify-end">
                <button
                  className="text-white inline-flex items-center justify-end mt-3 bg-green-700 p-2 rounded-lg"
                  onClick={handleCloseModal}
                >
                  Жабуу
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
