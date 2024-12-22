import userPlaceHolderImg from "src/Assets/user-picture-placeholder.webp";
import { MY_NAME } from "src/Data/variables";
import s from "./Header.module.scss";
import HeaderNav from "./HeaderNav/HeaderNav";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <a href="/#" className={s.logoContainer}>
          <div className={s.imgHolder}>
            <img src={userPlaceHolderImg} alt={`${MY_NAME}'s face`} />
          </div>
          <h1 className={s.logoText}>{MY_NAME}</h1>
        </a>

        <HeaderNav />
        <MobileMenu />
      </div>
    </header>
  );
};
export default Header;
