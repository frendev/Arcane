import ServiceCard from "../ServiceCard";
import styles from "./Service.module.scss";

const Service = () => {
  return (
    <div id="services" className={styles.servicesContainer}>
      <h1 className={styles.services__heading}>Services</h1>
      <div className={styles.services__section}>
        <ServiceCard />
      </div>
    </div>
  );
};

export default Service;
