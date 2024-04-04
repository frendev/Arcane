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
              <Image src={logo} alt="logo" width={250} height={60} />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
