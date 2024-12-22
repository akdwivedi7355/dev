import React from "react";
import Slider from "react-slick";
import { SKILLS_SHOWCASE } from "src/Data/staticData";
import s from "./SkillsShowcase.module.scss";

const SkillsShowcase = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className={s.skillsShowcase}>
      <Slider {...sliderSettings}>
        {SKILLS_SHOWCASE.map(({ skill, imgSrc, link, id }) => (
          <div key={id} className={s.skillItem}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={imgSrc} alt={skill} loading="lazy" />
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SkillsShowcase;
