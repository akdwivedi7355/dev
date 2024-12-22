import { NAV_LINKS } from "src/Data/staticData";
import CopyRights from "./CopyRights/CopyRights";
import s from "./Footer.module.scss";
import SocialMedia from "./SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <nav className={s.nav}>
          <ul className={s.navLinks}>
            {NAV_LINKS.map(({ name, link }) => (
              <li key={`${name}`}>
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>

          <SocialMedia />
          <CopyRights />
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
