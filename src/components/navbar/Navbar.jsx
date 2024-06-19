import Links from "./links/Links";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>LOGO</div>
      <div>
        <Links />
      </div>
    </div>
  );
};
export default Navbar;
