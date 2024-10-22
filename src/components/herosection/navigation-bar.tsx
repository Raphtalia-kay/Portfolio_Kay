import { FaBehanceSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 z-50 bg-red-500">
      <div className="navigation-bar flex w-screen items-center justify-between bg-black px-28">
        <div className="social-app flex gap-2 pt-4">
          <FaBehanceSquare size="25" color="white" />
          <FaLinkedin size="25" color="white" />
          <FaGithubSquare size="25" color="white" />
          <FaInstagramSquare size="25" color="white" />
        </div>
        <div className="menu-bar pt-4">
          <CgMenuRightAlt size="40" color="white" />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
