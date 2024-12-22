import userPlaceHolderImg from "src/Assets/user-picture-placeholder.webp";
import { useRef } from "react";
import useSetActiveOnVisible from "src/Hooks/App/useSetActiveOnVisible";
import ColoredButton from "../../Shared/Buttons/ColoredButton/ColoredButton";
import SectionTitle from "../../Shared/SmallComponents/SectionTitle/SectionTitle";
import s from "./HeroSection.module.scss";

const HeroSection = () => {
  const heroSectionRef = useRef();
  useSetActiveOnVisible(heroSectionRef, "Home", {
    threshold: 0.5,
  });

  return (
    <section ref={heroSectionRef} className={s.heroSection} id="home">
      <div className={s.content}>
        <SectionTitle
          name="Hello 👋"
          description={"Hi, I'm Aditya Kumar Dwivedi! A Full Stack Developer crafting sleek web apps and dynamic websites that bring the internet to life."}
        />
        <div className={s.buttons}>
          <ColoredButton href="#projects" text="Projects" />
          <ColoredButton href="#contact" text="Contact" styleType="secondary" />
        </div>
      </div>
      <div className={s.imageContainer}>
        <img src={userPlaceHolderImg} alt="Aditya Kumar Dwivedi" className={s.profileImage} />
      </div>
    </section>
  );
};

export default HeroSection;
