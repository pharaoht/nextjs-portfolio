"use client"
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {

    const pathName = usePathname();

    const activeClass = pathName === item.path && styles.active;

    return (
        <Link href={item.path} className={`${styles.container} ${activeClass}`}>
            {item.title}
        </Link>
    )
};

export default NavLink;