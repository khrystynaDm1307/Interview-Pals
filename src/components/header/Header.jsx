import "./Header.scss";
import { Link } from "react-scroll";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const openMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header>
      <div className="hamburger-icon" id="icon" onClick={openMenu}>
        <div className={menuOpened ? "icon-1 a" : "icon-1"} id="a"></div>
        <div className={menuOpened ? "icon-2 c" : "icon-2"} id="b"></div>
        <div className={menuOpened ? "icon-3 b" : "icon-3"} id="c"></div>
        <div className="clear"></div>
      </div>

      <nav id="nav" className={menuOpened ? "show" : ""}>
        <ul>
          <li>
            <Link to="main" smooth={true} duration={500} onClick={openMenu}>
              <RouterLink
                to="/"
                smooth={true}
                duration={500}
                onClick={openMenu}
              >
                Home
              </RouterLink>
            </Link>
          </li>
          <li>
            <Link to="how" smooth={true} duration={500} onClick={openMenu}>
              How
            </Link>
          </li>
          <li>
            <Link to="what" smooth={true} duration={500} onClick={openMenu}>
              Why us
            </Link>
          </li>
          <li>
            <Link to="who" smooth={true} duration={500} onClick={openMenu}>
              Who We Are
            </Link>
          </li>
          <li>
            <Link to="proccess" smooth={true} duration={500} onClick={openMenu}>
              The process
            </Link>
          </li>
          <li>
            <Link to="footer" duration={500}>Contact us:</Link>
          </li>
          <li>
            <Link to="footer" smooth={true} duration={500}>
              info@interviewpals.com
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={menuOpened ? "dark-blue slide" : "dark-blue"}
        id="blue"
      ></div>
    </header>
  );
}

export default Header;
