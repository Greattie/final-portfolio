import logo from "../assets/final-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGit } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-32 h-32" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/greatamubode/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="github.com/Greattie" target="_blank">
          <FaGit />
        </a>
      </div>
    </nav>
  );
};
