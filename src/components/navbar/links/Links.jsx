import style from "./links.module.css";
import Navlink from "./navlink/Navlink";

const Links = () => {
  const links = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Connect', path: '/connect' },
    { title: 'Blog', path: '/blog' },
  ]
  return <div className={style.link}>
    {links.map(link => (
      < Navlink item={link} key={link.title} />
    ))}
  </div>;
};

export default Links;
