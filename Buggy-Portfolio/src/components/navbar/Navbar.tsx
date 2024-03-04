import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";


const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="name_sec"
        >
          <h1 className="My_name">
          Homayoun <span className="last_name">Mohammadi</span>
          <span className="red-dot">.</span>
          </h1>
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/homayoun-mohammadi-a3590a283/"  target="_blank" title="Linkdin">
          <FaLinkedinIn/>
          </a>
          <a href="https://github.com/homayunmmdy"  target="_blank" title="Github">
          <FiGithub />
          </a>
          <a href="https://x.com/homayunmdy?t=nDE96980QvFs7e9aNWIlDA&s=09" target="_blank"  title="X">
          <BsTwitterX/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
