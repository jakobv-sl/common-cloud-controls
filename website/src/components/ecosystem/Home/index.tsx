import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const pages = [
  {
    name: 'AWS Lightning Lane',
    nav: 'aws-lightning-lane',
  },
  {
    name: 'Azure Policy',
    nav: 'azure-policy',
  },
  {
    name: 'Azure Verified Modules',
    nav: 'azure-verified-modules',
  },
  {
    name: 'CALM',
    nav: 'calm',
  },
  {
    name: 'Gemara',
    nav: 'gemara',
  },
  {
    name: 'GitHub Releases',
    nav: 'github-releases',
  },
  {
    name: 'GRC.Store',
    nav: 'grc-store',
  },
  {
    name: 'Privateer',
    nav: 'privateer',
  },
  {
    name: 'Prowler',
    nav: 'prowler',
  },
];
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
              <div className={styles.row}>
                <span className={styles.label}>{m.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
