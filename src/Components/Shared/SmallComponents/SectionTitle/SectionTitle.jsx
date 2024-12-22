import s from "./SectionTitle.module.scss";

const SectionTitle = ({ name, description }) => {
  return (
    <>
      <span className={s.name}>{name}</span>
      <h2 className={s.description}>{description}</h2>
    </>
  );
};
export default SectionTitle;
