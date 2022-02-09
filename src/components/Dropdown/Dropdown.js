import React, { useState } from "react";
import styles from "./Dropdown.module.scss";
import Link from "next/link";

export default function Dropdown({ subMenu }) {
  const [click, setClick] = useState(false);

  return (
    <>
      <ul
        className={click ? styles.dropdownMenu__clicked : styles.dropdownMenu}
      >
        {subMenu.map((subMenuItem, index) => {
          return (
            <div className={styles.dropdownMenu__link}>
              <Link
                href={`/services/${subMenuItem.href}`}
                onClick={() => setClick(false)}
              >
                {subMenuItem.title}
              </Link>
            </div>
          );
        })}
      </ul>
    </>
  );
}
