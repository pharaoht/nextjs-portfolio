"use client"

import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const navLinks = [
    { id: 1, name: "Home", route: "#home" },
    { id: 2, name: "Experience", route: "#experience" },
    { id: 4, name: "Skills", route: "#skills" },
    { id: 5, name: "Contact", route: "#contact" }
]

const Navbar = () => {

    const [ mobileMenu, setMobileMenu ] = useState(false);

    const handleOpenMobileMenu = () => setMobileMenu(prevState => !prevState);

    const isScrolling = useScroll();

    const navCssClass = isScrolling ? "bg-white shadow-lg transition duration-500" : 'relative';

    const linkTextCssClass = isScrolling ? "text-black" : 'text-white';

    const renderNavLinks = ( viewType:String ) => {

        const cssClass = viewType === 'desktop' ? "hover:underline hover:text-yellow-500 transition duration-500" : '';
        
        return navLinks.map((itm, idx) => (
            <Link href={itm.route} key={itm.id} className={cssClass}>
                <li>{itm.name}</li>
            </Link>
        ));

    };

    return (
        <nav style={{'position':'fixed'}} className={`fixed w-full top-0 z-[99999] py-5 relative ${navCssClass}`}>
            <div className="max-w-[1400px] mx-auto flex justify-between items-center w-[91%]">
                <Link href={"#home"}>
                    <h1 className="text-3xl text-yellow-500 font-bold">Pharaoh</h1>
                </Link>

                <ul className={`flex gap-10 max-md:hidden ${linkTextCssClass}`}>
                    {
                        renderNavLinks('desktop')
                    }
                </ul>
                <div className={`md:hidden text-3xl cursor-pointer ${linkTextCssClass}`} onClick={handleOpenMobileMenu}>
                    {
                        mobileMenu ? <MdClose /> : <FiMenu/>
                    }
                </div>
                {
                    mobileMenu && (
                        <ul className="md:hidden bg-yellow-500 absolute top-14 right-5 px-4 py-6 text-center rounded-md flex flex-col gap-3 shadow-md">
                            {
                                renderNavLinks('mobile')
                            }
                        </ul>
                    )
                }
            </div>
        </nav>
    )
};

export default Navbar;