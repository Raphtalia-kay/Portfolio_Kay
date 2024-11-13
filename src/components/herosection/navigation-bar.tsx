import { FaBehanceSquare, FaLightbulb } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FaHome } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { GiJourney } from "react-icons/gi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { MdContactMail } from "react-icons/md";

import { useState } from "react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="fixed top-0 z-50">
      <div className="navigation-bar flex w-screen items-center justify-between bg-black px-28">
        <div className="social-app flex gap-2 pt-4">
          <a href="">
            <FaBehanceSquare size="25" color="white" />
          </a>
          <a href="">
            <FaLinkedin size="25" color="white" />
          </a>
          <a href="">
            <FaGithubSquare size="25" color="white" />
          </a>
          <a href="">
            <FaInstagramSquare size="25" color="white" />
          </a>
        </div>
        <div className="menu-bar pt-4">
          <CgMenuRightAlt
            className="cursor-pointer"
            onClick={toggleDrawer}
            size="40"
            color="white"
          />
          <p>introduction</p>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="!w-[500px] !bg-gray-500 !bg-opacity-10 text-white shadow-inner backdrop-blur-sm"
          >
            <div className="lg:py-[80px]">
              <h3 className="text-center lg:text-[24px]">Menu</h3>
              <div className="flex justify-center lg:pt-5">
                <table className="w-[150px]">
                  <tr className="">
                    <td className="lg:py-4 lg:pe-3">
                      00.
                    </td>
                    <td className="">Home</td>
                  </tr>
                  <tr className="">
                    <td className="lg:py-4">
                      01.
                    </td>
                    <td>About</td>
                  </tr>
                  <tr className="">
                    <td className="lg:py-4">
                     02.
                    </td>
                    <td>Journey</td>
                  </tr>
                  <tr className="">
                    <td className="lg:py-4">
                     03.
                    </td>
                    <td>Skills</td>
                  </tr>
                  <tr className="">
                    <td className="lg:py-4">
                     04.
                    </td>
                    <td>Projects</td>
                  </tr>
                  <tr className="">
                    <td className="lg:py-4">
                    05.
                    </td>
                    <td>Service</td>
                  </tr>
                  <tr className="">
                    <td className="lg:py-4">
                    06.
                    </td>
                    <td>Contact Me</td>
                  </tr>
                </table>
              </div>

              <h3 className="text-center lg:pt-[20px] lg:text-[24px]">
                Social Account
              </h3>
              <div className="social-app flex justify-center gap-[15px] lg:pt-[28px]">
                <a href="">
                  <FaBehanceSquare size="25" color="white" />
                </a>
                <a href="">
                  <FaLinkedin size="25" color="white" />
                </a>
                <a href="">
                  <FaGithubSquare size="25" color="white" />
                </a>
                <a href="">
                  <FaInstagramSquare size="25" color="white" />
                </a>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
