import s from "./ColoredButton.module.scss";

const ColoredButton = ({ href, text, styleType, target = "_self" }) => {
  const type2Class = styleType === "secondary" ? s.secondary : "";

  return (
    <a
      href={href}
      className={`${s.button} ${type2Class}`}
      target={target}
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};
export default ColoredButton;
