
import { useState } from "react";
import { NavLink } from "react-router-dom"
import Logo from '../../public/logo/husniyeErparunLogo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
    // useState
    const [nav, setNav] = useState(false); //default state
    const handleClick = () => setNav(!nav);
    return (
        <div>
            <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#DDD0C8] text-[#323232]">
                {/* ------------- Logo ------------- */}
                <div>
                    <img src={Logo} alt="Logo Image" style={{ width: "200px" }} />
                </div>

                {/* ------------- Menu ------------- */}

                <ul className="hidden md:flex navbarList ">
                    <li className="">
                        <NavLink to="/" className='navbarLink'> Home </NavLink>
                    </li>
                    <li className=" ">
                        <NavLink to="/about" className='navbarLink'> About </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/experience" className='navbarLink'> Experience </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/features" className='navbarLink'> Features </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/portfolio" className='navbarLink'> Portfolio </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/blog" className='navbarLink'> Blog </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="/contact" className='navbarLink'> Contact </NavLink>
                    </li>
                </ul>


                {/* ------------- Hamburger Menu ------------- */}
                <div onClick={handleClick} className="md:hidden z-10">
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>
                {/* ------------- Mobile Menu ------------- */}
                <ul
                    className={
                        !nav
                            ? "hidden"
                            : "absolute top-0 left-0 w-full h-screen bg-[#DDD0C8] flex flex-col justify-center items-center"
                    }
                >
                    <li className="py-6 text-4xl"> <NavLink to="/home"> Home </NavLink> </li>
                    <li className="py-6 text-4xl"> <NavLink to="/about"> About </NavLink> </li>
                    <li className="py-6 text-4xl"> <NavLink to="/experience"> Experience </NavLink> </li>
                    <li className="py-6 text-4xl"> <NavLink to="/features"> Features </NavLink> </li>
                    <li className="py-6 text-4xl"> <NavLink to="/portfolio"> Portfolio </NavLink> </li>
                    <li className="py-6 text-4xl"> <NavLink to="/blog"> Blog </NavLink> </li>
                    <li className="py-6 text-4xl"> <NavLink to="/contact"> Contact </NavLink> </li>
                </ul>

                {/* ------------- Social Icons ------------- */}
                <div className="hidden md:flex fixed flex-col top-[35%] left-[10px]">
                    {/* //FIXME - - social */}
                    <ul>
                        <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                            <a className="flex justify-between items-center w-full " href="#">
                                Linkedin <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                            <a className="flex justify-between items-center w-full " href="#">
                                Github <FaGithub size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                            <a className="flex justify-between items-center w-full " href="#">
                                Email <HiOutlineMail size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                            <a className="flex justify-between items-center w-full " href="#">
                                Resume <BsFillPersonLinesFill size={30} />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar