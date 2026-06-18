import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import {pages} from "../../../plugin/ecosystem-pages"

export default function EcosystemHomePage() {

  return (
    <Layout title="Ecosystem">
      <div className={styles.grid}>
        {pages.map((m) => (
          <Link to={"/ecosystem/"+m.nav} key={m.nav} className={styles.card}>
            <div className={styles.logoWrapper}>
                <img src={"/img/ecosystem/"+m.nav+".svg"} alt={m.name} className={styles.logo} />
            </div>
            <div className={styles.body}>
                <span className={styles.label}>{m.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
