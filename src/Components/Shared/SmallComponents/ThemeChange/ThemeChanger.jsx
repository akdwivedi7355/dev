import { useEffect, useState } from "react";
import { colorPicker, gearIcon, textIcon, themeIcon } from "src/Assets/images";
import { hexToRgb } from "src/Functions/helper";
import useLocalStorage from "src/Hooks/Helper/useLocalStorage";
import SvgIcon from "../SvgIcon";
import s from "./ThemeChanger.module.scss";

const ThemeChanger = () => {
  const [themeColor] = useState("#1870a7");
  const [textColor] = useState("#000000");
  const [isMenuActive, setIsMenuActive] = useState(false);
  const activeClass = isMenuActive ? s.active : "";

  function setDefaultTheme() {
    setThemeColor("24, 112, 167", "theme-color");
    setThemeColor("#000000", "text-color");
  }

  useEffect(() => {
    const themeColorLocal = useLocalStorage("theme-color");
    const textColorLocal = useLocalStorage("text-color");

    if (themeColorLocal) setThemeColor(themeColorLocal, "theme-color");
    if (textColorLocal) setThemeColor(textColorLocal, "text-color");
  }, []);

  return (
    <>
      <button
        type="button"
        className={s.themeSelector}
        onClick={() => setIsMenuActive(true)}
        title="Theme picker"
      >
        <img
          src={colorPicker}
          alt={`A colorful circular icon resembling a color wheel,
            divided into eight equally sized segments, each in a different
            vibrant shade ranging from red, orange, yellow, green,
            blue, to purple, representing a spectrum of colors.`}
        />
      </button>

      <div className={`${s.menu} ${activeClass}`}>
        <button type="button" className={s.item} title="Theme color">
          <input
            placeholder="Color Selector"
            type="color"
            value={themeColor}
            onChange={(e) => handleChangeColor(e, "theme-color")}
          />
          <img
            src={themeIcon}
            alt={`A flat design icon featuring four small, colorful circles
              arranged in a diamond shape on a dark gray circular background.
              The circles are blue, red, yellow, and green, evenly
              spaced to form a simple and modern visual theme`}
          />
        </button>

        <button type="button" className={s.item} title="Text color">
          <input
            placeholder="Color Selector"
            type="color"
            value={textColor}
            onChange={(e) => handleChangeColor(e, "text-color")}
          />
          <img
            src={textIcon}
            alt={`Circular icon with the letter A in the center,
            designed in gradient shades of pink and orange,
            surrounded by a bold circular outline`}
          />
        </button>

        <button
          type="button"
          className={s.item}
          onClick={setDefaultTheme}
          title="Default theme"
        >
          <img
            src={gearIcon}
            alt={`Gear icon with circular arrows
            representing settings or updates`}
          />
        </button>

        <button
          type="button"
          className={s.closeIcon}
          onClick={() => setIsMenuActive(false)}
          title="Close"
        >
          <SvgIcon name="xMark" />
        </button>
      </div>
    </>
  );
};
export default ThemeChanger;

function handleChangeColor(event, cssVar) {
  const { r, g, b } = hexToRgb(event.target.value);
  const rgbColor = `${r}, ${g}, ${b}`;
  setThemeColor(rgbColor, cssVar);
}

function setThemeColor(color, cssVar) {
  document.documentElement.style.setProperty(`--${cssVar}`, color);
  useLocalStorage(cssVar, color);
}
