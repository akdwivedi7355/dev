import { MY_SKILLS } from "src/Data/staticData";
import s from "./MySkills.module.scss";

const MySkills = () => {
  return (
    <div className={s.mySkills}>
      <h3 className={s.title}>My Skills</h3>

      <ul className={s.skills}>
        {MY_SKILLS.map(({ skill, classColor, link, id }) => (
          <li key={id} className={s.skillItem}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${s.skillLink} ${classColor}`}
            >
              {skill}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MySkills;
