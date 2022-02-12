import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function Hero() {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    cursor: "pointer",
    color: "white",
  };
  return (
    <Carousel
      className={styles.heroContainer}
      showThumbs={false}
      autoPlay={true}
      transitionTime={5}
      infiniteLoop={true}
      animationHandler="slide"
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <FaCaretLeft
            style={{ ...arrowStyles, left: 15 }}
            onClick={onClickHandler}
            title={label}
            size={60}
          />
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <FaCaretRight
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 15 }}
            size={60}
          />
        )
      }
    >
      <div className={styles.heroItem}>
        <div className={styles.heroImage}>
          <Image
            alt="Photo by Laura Tancredi from Pexels"
            layout="fill"
            src="https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>
        <div className={styles.heroText}>
          <h1>
            We have <span className={styles.name}>ARCANE</span> Capabilities
          </h1>
          <p>
            With competent expertise throughout diverse sectors, we focus on
            providing holistic engineering solutions and further enforce trust
            within our esteemed clients.
          </p>
        </div>
      </div>
      <div className={styles.heroItem}>
        <div className={styles.heroImage}>
          <Image
            alt="Photo by Josh Sorenson from Pexels"
            src="https://images.pexels.com/photos/103596/pexels-photo-103596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920"
            layout="fill"
          />
        </div>
        <div className={styles.heroText}>
          <h1>
            We have <span className={styles.name}>ARCANE</span> Capabilities
          </h1>
          <p>
            With competent expertise throughout diverse sectors, we focus on
            providing holistic engineering solutions and further enforce trust
            within our esteemed clients.
          </p>
        </div>
      </div>
    </Carousel>
  );
}
