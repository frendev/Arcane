import styles from "./Footer.module.scss";
import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin, BsTelephone } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__about}>
        <h4 className={styles.heading}>About</h4>
        <p className={styles.text}>
          Arcane projects is an award-winning construction agency. You’ll find
          the About Page at the top of the menu under the Who section. This page
          has a unique feel, thanks to the deconstructed action figures
          representing the founders, Leigh Whipday and Jonny Lander. The great
          attention to detail and interactivity also reflect the company’s 16
          years of experience.
        </p>
      </div>
      <div className={styles.footer__contact}>
        <h4 className={styles.heading}>Contact us</h4>
        <div className={styles.links}>
          <div className={styles.link}>
            <BsLinkedin className={styles.icon} size={30} />
            <span>Arcane Projects</span>
          </div>
          <div className={styles.link}>
            <BsTelephone className={styles.icon} size={30} />
            <span> + 91 - 7738536355</span>
          </div>
          <div className={styles.link}>
            <HiOutlineMail className={styles.icon} size={30} />
            <span>arcaneprojects99@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
