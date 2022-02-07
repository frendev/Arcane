import useSWR from "swr";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import logo from "../../public/ArcaneLogo.png";
import classname from "classnames";
import { createClient } from "contentful";

export default function Navbar() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const [isMobileNavigation, setIsMobileNavigation] = useState(false);

  const { data } = useSWR(`/api/navbar`, fetcher);
  console.log(data);

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <div className={styles.header__logo}>
            <Link href="/">
              <Image src={logo} alt="logo" width={250} height={45} />
            </Link>
          </div>
          {/* #this is for desktop navbar */}
          <div>
            <div className={styles.header__links}>
              {data &&
                data.items[0].fields.navbar.navbar.map((navItem) => {
                  if (!navItem.subMenu) {
                    return (
                      <div className={styles.link}>
                        <Link
                          className={styles.linkRedirect}
                          href={`${navItem.href}`}
                        >
                          {navItem.title}
                        </Link>
                      </div>
                    );
                  } else {
                    console.log(navItem);
                    return (
                      <div className={styles.link}>
                        <Link href={`http://localhost:3000/#${navItem.href}`}>
                          {navItem.title}
                        </Link>
                        <FaCaretDown size={25} className={styles.iconUp} />
                        <FaCaretUp size={25} className={styles.iconDown} />
                        <div className={styles.dropdownMenu}>
                          <Dropdown subMenu={navItem.subMenu} />
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>

          {/* this is for mobile navigation */}
        </div>
        <div className={styles.mobileNavContainer}>
          <div className={styles.header__logo}>Arcane Projects</div>
          <div
            className={styles.hamburgerMenuIcon}
            onClick={() => setIsMobileNavigation(!isMobileNavigation)}
          >
            <GiHamburgerMenu size={30}></GiHamburgerMenu>
          </div>
          {isMobileNavigation && (
            <div className={styles.navLinks}>
              <div className={styles.link}>
                <Link href="/">Home</Link>
              </div>
              <div className={styles.link}>
                <Link href="http://localhost:3000/#services">Services</Link>
                <div className={styles.dropdownMenu}>
                  <Dropdown />
                </div>
              </div>
              <div className={styles.link}>
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
