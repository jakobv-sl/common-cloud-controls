import React from "react";
import styles from "./styles.module.css";
import MonoIcon from "../../MonoIcon";

export default ({ imagePath, children, title, id }) => {

  return (
    <section className={styles.homeSection} id={id}>
        <h2 className={styles.sectionTitle}>{title}</h2>

        <div className={styles.logoWrapper}>                
            <img src={imagePath} alt={imagePath} className={styles.logo}/>
        </div>

        <div className={styles.sectionContents}>{children}</div>

        <div className={styles.footerImage}>
            <MonoIcon />
        </div>
    </section>
  );
}
