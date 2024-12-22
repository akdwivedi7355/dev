import { useRef } from "react";
import useSetActiveOnVisible from "src/Hooks/App/useSetActiveOnVisible";
import SectionTitle from "../../Shared/SmallComponents/SectionTitle/SectionTitle";
import s from "./AboutSection.module.scss";
import MySkills from "./MySkills/MySkills";
import MyStory from "./MyStory/MyStory";

const AboutSection = () => {
  const aboutSectionRef = useRef();
  useSetActiveOnVisible(aboutSectionRef, "About", {
    threshold: 0.5,
  });

  return (
    <section ref={aboutSectionRef} className={s.aboutSection} id="about">
      <div className="container" data-container>
        <SectionTitle
          name="About 🦄"
          sectionName="About"
          description={`Discover more about my journey, what I specialize in, and the skills I bring to the table.`}
      />

        <div className={s.wrapper}>
          <MyStory />
          <MySkills />
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
