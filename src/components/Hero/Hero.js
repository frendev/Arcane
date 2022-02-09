import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../../public/arcaneLogo.png";

import { Carousel } from "react-responsive-carousel";

export default function Hero() {
  return (
    <Carousel className={styles.heroContainer} showThumbs={false}>
      <div className={styles.heroItem}>
        <Image
          alt="Photo by Laura Tancredi from Pexels"
          layout="fill"
          src="https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <div className={styles.heroText}>
          <h3>Our Capabilities</h3>
          <p>
            With competent expertise throughout diverse sectors, we focus on
            providing holistic engineering solutions and further enforce trust
            within our esteemed clients.
          </p>
          <Image src={logo} />
        </div>
      </div>
      <div className={styles.heroItem}>
        <Image
          alt="Photo by Josh Sorenson from Pexels"
          src="https://images.pexels.com/photos/103596/pexels-photo-103596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920"
          layout="fill"
        />
        <div className={styles.heroText}></div>
      </div>
    </Carousel>
  );
}
