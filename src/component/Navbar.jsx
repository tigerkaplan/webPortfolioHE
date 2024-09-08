import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/logo/husniyeErparunLogo.png"; // Correct path
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaLocationArrow,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import cv from "../assets/data/HusniyeErparun_webDeveloperCv.pdf"; // Correct CV path

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

    return (
        <div>
            <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#DDD0C8] text-[#323232] z-20 ">
                <div className="h-[175px]">
                    <img
                        src={Logo}
                        alt="Logo Image"
                        className="object-fit w-full h-full"
                    />
                </div>

                {/* Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    <li>
                        <NavLink to="/" className="navbarLink">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="navbarLink">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/experience" className="navbarLink">
                            Experience
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/features" className="navbarLink">
                            Features
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className="navbarLink">
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="navbarLink">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                {/* Hamburger Menu */}
                <div onClick={handleClick} className="md:hidden z-10">
                    {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
                </div>

                {/* Mobile Menu */}
                <ul
                    className={
                        !nav
                            ? "hidden"
                            : "absolute top-0 left-0 w-full h-screen bg-[#DDD0C8] flex flex-col justify-center items-center text-center"
                    }
                >
                    <li className="py-6 text-4xl w-full">
                        <NavLink to="/" onClick={handleClick}>
                            Home
                        </NavLink>
                    </li>
                    <li className="py-6 text-4xl w-full">
                        <NavLink to="/about" onClick={handleClick}>
                            About
                        </NavLink>
                    </li>
                    <li className="py-6 text-4xl w-full">
                        <NavLink to="/experience" onClick={handleClick}>
                            Experience
                        </NavLink>
                    </li>
                    <li className="py-6 text-4xl w-full">
                        <NavLink to="/features" onClick={handleClick}>
                            Features
                        </NavLink>
                    </li>
                    <li className="py-6 text-4xl w-full">
                        <NavLink to="/portfolio" onClick={handleClick}>
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="py-6 text-4xl w-full">
                        <NavLink to="/contact" onClick={handleClick}>
                            Contact
                        </NavLink>
                    </li>
                </ul>

                {/* Social Icons */}
                <div className="hidden md:flex fixed flex-col top-[35%] left-[10px]">
                    <ul>
                        <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-[#d3c3b8] duration-300">
                            <a className="flex justify-between items-center w-full" href="#">
                                Linkedin <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-[#d3c3b8]  duration-300">
                            <a className="flex justify-between items-center w-full" href="https://github.com/tigerkaplan">
                                Github <FaGithub size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-[#d3c3b8] duration-300">
                            <a className="flex justify-between items-center w-full" href="mailto:husniyeerparun.dev@gmail.com">
                                Email <HiOutlineMail size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-[#d3c3b8] duration-300">
                            <a className="flex justify-between items-center w-full" href="#">
                                Brighton, UK <FaLocationArrow size={30} />
                            </a>
                        </li>

                        {/* CV download */}
                        <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-[#d3c3b8] duration-300">
                            <a className="flex justify-between items-center w-full" href={cv} download="HusniyeErparun_webDeveloperCv.pdf">
                                Resume <BsFillPersonLinesFill size={30} />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
