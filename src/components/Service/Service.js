import ServiceCard from "../ServiceCard";
import styles from "./Service.module.scss";

const Service = ({ services }) => {
  console.log(services);

  return (
    <div id="services" className={styles.servicesContainer}>
      <h1 className={styles.services__heading}>Services</h1>
      <div className={styles.services__section}>
        {services &&
          services.map((service, index) => {
            console.log(index);
            return <ServiceCard key={index} service={service} />;
          })}
      </div>
    </div>
  );
};

export default Service;
