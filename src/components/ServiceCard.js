import React from "react";
import styles from "../styles/ServiceCard.module.scss";
import Image from "next/image";
import logo from "../public/vercel.svg";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  const { title, slug, imageUrl, description } = service.fields;
  console.log(imageUrl);
  return (
    <>
      <div className={styles.service}>
        <Image
          src={`https:${imageUrl.fields.file.url}`}
          className={styles.services__icon}
          alt="logo"
          width={250}
          height={250}
        />
        <h4 className={styles.service__heading}>
          <Link href={`/services/${slug}`}>{title}</Link>
        </h4>
      </div>
    </>
  );
};

export default ServiceCard;
