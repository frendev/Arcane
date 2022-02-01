import styles from "../styles/Services.module.scss";

export default function Services() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesMenuContainer}>
        <select className={styles.servicesMenu}>
          <option className={styles.servicesOption} value="0">
            Select a Service
          </option>
          <option className={styles.servicesOption} value="1">
            Railways and Metros
          </option>
          <option className={styles.servicesOption} value="2">
            Environment
          </option>
          <option className={styles.servicesOption} value="3">
            Highways & Roads
          </option>
        </select>
      </div>
      <div className={styles.servicesHeading}>
        Services - Railways and Metros
      </div>
      <div className={styles.servicesTabsContainer}>
        <ul className={styles.serviceTabs}>
          <li className={styles.serviceTab}>
            <span>Environment & Urban Development</span>
          </li>
          <li className={styles.serviceTab}>
            <span> Highways & Roads</span>
          </li>
          <li className={styles.serviceTab}>
            <span> Railways & Metros</span>
          </li>
        </ul>
      </div>
      <div className={styles.servicesDetails}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu ligula
        ac nisi imperdiet vestibulum. Integer nec consectetur metus, a pretium
        augue. Morbi scelerisque tortor at nibh dignissim, at condimentum est
        vulputate. Pellentesque eget dictum ante, sit amet semper enim. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Fusce vehicula
        massa non erat maximus fermentum. Proin purus mi, sollicitudin id
        dapibus et, vestibulum vitae mauris. In hac habitasse platea dictumst.
        Vestibulum vel nisi ut nulla luctus luctus. Quisque eu rutrum nunc.
        Morbi id urna sed nunc dapibus consectetur. Sed ex lectus, porttitor
        maximus enim sit amet, semper tincidunt massa. Fusce accumsan
        condimentum lorem, id vestibulum lacus tincidunt sit amet. Sed porta
        consequat arcu, a pellentesque enim malesuada quis. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Phasellus ligula lorem, commodo vel lacus fermentum, congue blandit
        eros. Donec est metus, consectetur a felis sed, rhoncus dapibus leo.
        Pellentesque odio libero, tempor non vulputate a, scelerisque eget diam.
        Quisque ligula libero, varius eu ligula id, interdum feugiat erat. Donec
        id ex vestibulum, rutrum leo ut, vulputate erat. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Nam maximus pharetra suscipit.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
        lobortis fermentum urna, et ornare elit iaculis id. Proin mollis tortor
        neque, eu commodo sem ultricies vel. Nulla pharetra, nunc in dapibus
        efficitur, felis erat accumsan nibh, nec euismod ante tortor nec sapien.
        Vivamus auctor quis felis sit amet sagittis. Suspendisse a faucibus
        nibh. Mauris placerat vulputate vestibulum. Pellentesque tincidunt nunc
        eros, non pharetra quam porttitor a. Donec fringilla sapien purus, non
        tempus justo feugiat eget. Maecenas id mi eu nibh pretium viverra.
        Maecenas eget libero sed leo varius commodo. Donec euismod purus quis
        risus luctus, vitae molestie mauris bibendum. Morbi porta lectus id
        placerat feugiat. Aliquam at dui fermentum odio gravida varius. Nam sed
        magna a diam rutrum aliquam. Maecenas in facilisis ex. Vivamus sit amet
        cursus diam, a fringilla mi. Donec diam nulla, posuere non quam eget,
        semper placerat quam. Aliquam vitae est vel erat iaculis feugiat.
        Vestibulum id conv purus. Aliquam condimentum hendrerit faucibus.
        Quisque lacus ante, pulvinar sit amet lacinia sit amet, suscipit id
        nunc. Mauris rhoncus interdum semper. Sed ut semper tortor. Maecenas non
        lacinia felis. Duis maximus, diam eget sagittis porta, elit ex gravida
        ipsum, nec fringilla leo erat et arcu. Ut sit amet maximus quam,
        porttitor rutrum diam. Integer pulvinar vestibulum orci nec vehicula.
        Proin sollicitudin consequat enim, eu aliquet ligula consequat sagittis.
        In hac habitasse platea dictumst. Pellentesque malesuada bibendum lectus
        sodales fermentum. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Mauris porta, justo sed
        ultricies gravida, turpis velit consectetur purus, ac sollicitudin magna
        purus gravida tellus. Integer mattis malesuada magna, vel mollis libero
        interdum non. Ut et diam sem. Cras vitae faucibus ipsum. Vivamus eu urna
        id urna maximus sodales. Donec hendrerit eleifend justo, eget suscipit
        odio consectetur id. Donec ornare, mauris at blandit condimentum, turpis
        nisi vulputate elit, ut fringilla libero mauris sed quam. Morbi sagittis
        mattis interdum. Nulla sit amet ante sed elit dictum rutrum.
      </div>
    </div>
  );
}
