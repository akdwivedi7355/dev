import { codewarsLogo } from "src/Assets/images";
import { MY_SOCIAL_MEDIA } from "src/Data/staticData";
import SvgIcon from "../../Shared/SmallComponents/SvgIcon";
import s from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <ul className={s.socialMedia}>
      {MY_SOCIAL_MEDIA.map(({ name, link, id }) => (
        <li key={id}>
          <a
            href={link}
            className={name}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <SvgIcon name={name} />
          </a>
        </li>
      ))}

      <li>
        <a
          href="https://www.codewars.com/users/Moamal-2000"
          className="codewars"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={codewarsLogo} alt="codewars logo" loading="lazy" />
        </a>
      </li>
    </ul>
  );
};
export default SocialMedia;
