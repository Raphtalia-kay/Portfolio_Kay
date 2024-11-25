import { FaBehanceSquare, FaLightbulb } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";


import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change 50 to the scroll threshold you prefer
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="fixed top-0 z-50">
      <div className={cn("navigation-bar flex w-screen items-center justify-between bg-black px-32", 
        scrolled ? "bg-gray-500 bg-opacity-10 shadow-inner backdrop-blur-sm" : ""
      )}>
        <div className="social-app flex gap-2 py-[8px]">
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
        <div className="menu-bar py-[8px]">
          <CgMenuRightAlt
            className="cursor-pointer"
            onClick={toggleDrawer}
            size="40"
            color="white"
          />

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
                    <td className="lg:py-4 lg:pe-3">00.</td>
                    <td className="">
                      <a href="#1">Home</a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="lg:py-4">01.</td>
                    <td>
                      <a href="#2">About</a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="lg:py-4">02.</td>
                    <td>
                      <a href="#3">Journey</a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="lg:py-4">03.</td>
                    <td>
                      <a href="#4">Skills</a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="lg:py-4">04.</td>
                    <td>
                      <a href="#5">Projects</a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="lg:py-4">05.</td>
                    <td>
                      <a href="#6">Service</a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="lg:py-4">06.</td>
                    <td>
                      <a href="#7">Contact Me</a>
                    </td>
                  </tr>
                </table>
              </div>

              <h3 className="text-center lg:pt-[20px] lg:text-[24px]">
                Social Account
              </h3>
              <div className="social-app flex justify-center gap-[15px] lg:pt-[28px]">
                <a href="https://www.behance.net/kaythadarsoe">
                  <FaBehanceSquare size="25" color="white" />
                </a>
                <a href="https://www.linkedin.com/in/kay-thadar-soe-raphtalia-kay-672b981aa/">
                  <FaLinkedin size="25" color="white" />
                </a>
                <a href="https://github.com/Raphtalia-kay">
                  <FaGithubSquare size="25" color="white" />
                </a>
                <a href="https://www.instagram.com/kaiaa_kkk/">
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
