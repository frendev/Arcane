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
          console.log(subMenuItem);
          return (
            <div key={index} className={styles.dropdownMenu__link}>
              <Link
                href={`/services/${subMenuItem.fields.slug}`}
                onClick={() => setClick(false)}
              >
                {subMenuItem.fields.title}
              </Link>
            </div>
          );
        })}
      </ul>
    </>
  );
}
