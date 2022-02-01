import React from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../public/vercel.svg";

import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <Carousel className={styles.heroContainer} showThumbs={false}>
      <div className={styles.heroItem}>
        <Image layout="responsive" src={logo} />
      </div>
      <div className={styles.heroItem}>
        <Image
          alt="The guitarist in the concert."
          src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
          layout="fill"
        />
      </div>
    </Carousel>
  );
};

export default Hero;
