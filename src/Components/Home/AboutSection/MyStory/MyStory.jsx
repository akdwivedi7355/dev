import ColoredButton from "../../../Shared/Buttons/ColoredButton/ColoredButton";
import s from "./MyStory.module.scss";

const MyStory = () => {
  return (
    <div className={s.myStory}>
      <h3 className={s.title}>My Story</h3>

      <p className={s.description}>
        <span>
          I have always been passionate about building solutions that make
          people's lives easier. From a young age, I loved solving problems
          through technology. This journey has allowed me to learn and grow,
          constantly striving to create impactful products.
        </span>
        <span>
          Over the years, I have honed my skills in full-stack development,
          mastering tools and frameworks that help bring my ideas to life. From
          designing intuitive user interfaces to writing complex back-end
          systems, my experience has allowed me to build end-to-end solutions.
        </span>
        <span>
          What drives me is the ability to create, innovate, and make an impact
          with the work I do. Whether it's working on exciting projects or
          collaborating with like-minded individuals, I am always eager to learn
          more and push the boundaries of what's possible.
        </span>
      </p>

      <div className={s.buttonWrapper}>
        <ColoredButton href="#projects" text="View My Projects" />
      </div>
    </div>
  );
};

export default MyStory;
