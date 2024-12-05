"use client";
import Link from "next/link";
import styles from "./menulLink.module.css";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      prefetch={true}
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
