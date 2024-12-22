import { MY_SOCIAL_MEDIA } from "src/Data/staticData";
import { AUTHOR_DATA, MY_NAME } from "src/Data/variables";
import s from "./CopyRights.module.scss";

const CopyRights = () => {
  return (
    <p className={s.copyrights}>
      Website designed 
       And Developed by{" "}
      <a href={MY_SOCIAL_MEDIA[0].link} target="_blank" rel="noreferrer">
        {MY_NAME}
      </a>
    </p>
  );
};
export default CopyRights;
