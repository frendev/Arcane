import React, { useState } from "react";
import { MenuItems } from "../utils/MenuItems";
import styles from "../styles/Dropdown.module.scss";
import Link from "next/link";

export default function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? styles.dropdownMenu__clicked : styles.dropdownMenu}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={styles.dropdownMenu__link}
                href={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
