import { useState } from "react";
import { NAV_LINKS } from "src/Data/staticData";
import s from "./MobileMenu.module.scss";

const MobileMenu = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const activeClass = isMobileMenuActive ? s.active : "";

  function updateMobileMenuState(state) {
    setIsMobileMenuActive((prevState) => state || !prevState);
  }

  return (
    <>
      <button
        type="button"
        className={s.navButton}
        onClick={updateMobileMenuState}
        aria-label="Open Menu button"
      />

      <div className={`${s.mobileMenu} ${activeClass}`}>
        <button
          type="button"
          className={s.close}
          onClick={() => updateMobileMenuState(false)}
          aria-label="Close mobile menu"
        />

        <ul className={`${s.menuLinks} ${activeClass}`}>
          {NAV_LINKS.map(({ name, link }) => (
            <li key={`${name}`}>
              <a href={link} onClick={() => updateMobileMenuState(false)}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default MobileMenu;
