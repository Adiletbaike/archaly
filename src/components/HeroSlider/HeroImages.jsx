import React from "react";
import HeroSlider from "./HeroSlider";

const HeroImages = () => {
  const slides = [
    {
      image: "/images/hero.jpg",
      title: "Арчалы",
    },
    {
      image: "/images/IMG_2.JPG",
      title: "Арчалы",
    },
    {
      image: "/images/IMG_3.JPG",
      title: "Арчалы",
    }
  ];

  const hadith = [
    "«Силердин эң жакшыңар - куранды үйрөнүп аны башкаларга үйрөткөнүңөр.»",
    "«Балдарга куран үйрөткүлө, куран - аларга баарын үйрөтөт.»",
    "«Ыймандын жетимиштен ашык шагы бар. Алардын эң улуусу – «Лаа илааха иллаллох» сөзү, эң кичинекейи — жолдогу ыза берүүчү нерсени алып коюу. Ошондой эле уялуу да ыймандын бир шагы».",
    "«Пайгамбар (саллаллооху алайхи ва саллам) айтты: «Менин тууганыма (Абу Талиб) (өлөөр алдында) бул келмени сунуш кылганмын. Ким ушул келмени кабыл кылса, ал анын кутулуусуна себеп болот»",
    "«Зикирлердин эң абзели: «Лаа илаха иллаллох» келимеси, дубалардын эң абзели «Алхамдулиллах» – деп, айтканын укканмын»",
    "«Лаа илааха иллалох» деп күбө берүүнү көп айткыла» аны менен силердин ортоңор (өлүм, оору менен) тосулуп калаардан мурда.»",
  ];

  return <HeroSlider slides={slides} hadith={hadith} />;
};

export default HeroImages;
