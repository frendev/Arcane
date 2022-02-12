import React from "react";
import styles from "./ServiceCard.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ service }) {
  const { title, slug, imageUrl } = service.fields;

  return (
    <>
      <div className={styles.service}>
        <div className={styles.service__image}>
          <Image
            src={`https:${imageUrl.fields.file.url}`}
            className={styles.services__icon}
            alt="logo"
            width={250}
            height={250}
          />
        </div>
        <div className={styles.service__heading}>
          <Link href={`/services/${slug}`}>{title}</Link>
        </div>
      </div>
    </>
  );
}
