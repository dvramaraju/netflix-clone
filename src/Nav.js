import { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handelShow] = useState(false);

  const transitionNavBar = () =>
    window.scrollY > 100 ? handelShow(true) : handelShow(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />
        <img
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="Netflix Avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
