import useSWR from "swr";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import logo from "../../public/ArcaneLogoAndText.jpg";
import classname from "classnames";
import { createClient } from "contentful";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";

export default function Navbar() {
  const [isMobileNavigation, setIsMobileNavigation] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);

  const { scrollY } = useViewportScroll();

  const [hidden, setHidden] = useState(false);
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    console.log(hidden);
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => {
      update();
    });
  });

  const expandSubMenu = (num) => {
    console.log(num);
    if (num === selectedSubMenu) {
      setSelectedSubMenu(null);
    } else {
      setSelectedSubMenu(num);
    }
  };

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR(`/api/navbar`, fetcher);

  console.log(data);

  return (
    <>
      <motion.div
        className={styles.headerContainer}
        variants={variants}
        /** it's right here that we match our boolean state with these variant keys **/
        animate={hidden ? "hidden" : "visible"}
        /** I'm also going to add a custom easing curve and duration for the animation **/
        transition={{ duration: 0.25 }}
      >
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
                data.items.map?.((navItem) => {
                  if (!navItem.fields.subMenu) {
                    return (
                      <div className={styles.link}>
                        <Link href={`/${navItem.fields.slug}`}>
                          {navItem.fields.title}
                        </Link>
                      </div>
                    );
                  } else {
                    return (
                      <div className={styles.link}>
                        <Link
                          href={`http://localhost:3000/${navItem.fields.slug}`}
                        >
                          {navItem.fields.title}
                        </Link>
                        <FaCaretDown size={25} className={styles.iconUp} />
                        <FaCaretUp size={25} className={styles.iconDown} />
                        <div className={styles.dropdownMenu}>
                          <Dropdown subMenu={navItem.fields.subMenu} />
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
          <div className={styles.header__logo}>
            <Link href="/">
              <Image src={logo} alt="logo" width={250} height={40} />
            </Link>
          </div>
          <div
            className={styles.hamburgerMenuIcon}
            onClick={() => setIsMobileNavigation(!isMobileNavigation)}
          >
            <GiHamburgerMenu size={30}></GiHamburgerMenu>
          </div>
          <div className={styles.navLinks}>
            {isMobileNavigation &&
              data &&
              data.items.map?.((navItem, index) => {
                if (!navItem.fields.subMenu) {
                  return (
                    <div className={styles.link}>
                      <Link
                        className={styles.linkRedirect}
                        href={`${navItem.fields.slug}`}
                      >
                        {navItem.fields.title}
                      </Link>
                    </div>
                  );
                } else {
                  console.log(index);
                  return (
                    <>
                      <div className={styles.subMenuLink}>
                        <div className={styles.link}>
                          <Link
                            href={`http://localhost:3000/#${navItem.fields.slug}`}
                          >
                            {navItem.fields.title}
                          </Link>
                        </div>
                        {selectedSubMenu !== null && (
                          <div>
                            <AiOutlineMinus
                              size={30}
                              onClick={() => expandSubMenu(index)}
                            />
                          </div>
                        )}

                        {selectedSubMenu !== index && (
                          <div>
                            <AiOutlinePlus
                              size={30}
                              onClick={() => expandSubMenu(index)}
                            />
                          </div>
                        )}
                      </div>
                      <AnimatePresence inital={false}>
                        {selectedSubMenu === index && (
                          <motion.div
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                              open: { opacity: 1, height: "auto" },
                              collapsed: { opacity: 0, height: 0 },
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                            className={styles.dropdownMenu}
                          >
                            <Dropdown subMenu={navItem.fields.subMenu} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  );
                }
              })}
          </div>
        </div>
      </motion.div>
    </>
  );
}
