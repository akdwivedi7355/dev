import { useEffect, useRef } from "react";
import { useGlobalContext } from "src/Context/GlobalContext";
import { NAV_LINKS } from "src/Data/staticData";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import s from "./HeaderNav.module.scss";

const HeaderNav = () => {
  const { activeSection } = useGlobalContext();
  const { windowWidth } = useGetResizeWindow();
  const ulRef = useRef();
  const activeLineRef = useRef();
  const debounceRef = useRef();

  function getActiveLinePosition() {
    const navLinks = [...ulRef?.current?.children];
    const activeLineEle = activeLineRef?.current;
    let linePosition = 0;

    for (let index = 0; index < navLinks.length; index++) {
      const link = navLinks[index];
      const isActive = link.dataset.active === "true";
      const linkWidth = link.offsetWidth;

      if (isActive) {
        activeLineEle.style.width = linkWidth + "px";
        break;
      }

      linePosition += linkWidth;
    }
    activeLineEle.style.left = linePosition + "px";
  }

  useEffect(() => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(getActiveLinePosition, 400);
  }, [activeSection, windowWidth]);

  return (
    <nav className={s.nav}>
      <ul ref={ulRef}>
        {NAV_LINKS.map(({ name, link }) => (
          <li key={`${name}`} data-active={activeSection === name}>
            <a href={link}>{name}</a>
          </li>
        ))}

        <li ref={activeLineRef} className={s.activeLine} />
      </ul>
    </nav>
  );
};
export default HeaderNav;
