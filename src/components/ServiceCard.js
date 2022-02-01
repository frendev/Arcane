import React from "react";
import styles from "../styles/ServiceCard.module.scss";
import Image from "next/image";
import logo from "../public/vercel.svg";
import Link from "next/link";

const ServiceCard = () => {
  return (
    <>
      <div className={styles.service}>
        <Image src={logo} className={styles.services__icon} alt="logo" />
        <h4 className={styles.service__heading}>Highways & Roads</h4>
      </div>
      <div className={styles.service}>
        <Image src={logo} className={styles.services__icon} alt="logo" />
        <h4 className={styles.service__heading}>Highways & Roads</h4>
      </div>
      <div className={styles.service}>
        <Image src={logo} className={styles.services__icon} alt="logo" />
        <h4 className={styles.service__heading}>
          <Link href={"/services/" + "railways-and-metros"}>
            Highways & Roads
          </Link>
        </h4>
      </div>
      <div className={styles.service}>
        <Image src={logo} className={styles.services__icon} alt="logo" />
        <h4 className={styles.service__heading}>Highways & Roads</h4>
      </div>
      <div className={styles.service}>
        <Image src={logo} className={styles.services__icon} alt="logo" />
        <h4 className={styles.service__heading}>Highways & Roads</h4>
      </div>
      <div className={styles.service}>
        <Image src={logo} className={styles.services__icon} alt="logo" />
        <h4 className={styles.service__heading}>Highways & Roads</h4>
      </div>
    </>
  );
};

export default ServiceCard;
