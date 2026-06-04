import React from "react";
import HomeSection from "../HomeSection";
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from '../ui/accordion';
import styles from "./styles.module.css";

const audienceGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1.25rem",
  maxWidth: "780px",
  margin: "0 auto",
};

const audienceCardStyle = {
  border: "1px solid",
  borderRadius: "1rem",
  padding: "1.25rem 1.5rem",
};

const audiences = [
  {
    label: "Financial institutions",
    body: "Reduce compliance costs, close security gaps, and avoid vendor lock-in. Stop solving the same problems independently and build on a standard your peers helped create.",
  },
  {
    label: "Cloud service providers",
    body: "Certify once against a single, authoritative industry standard instead of meeting a different bar set by every customer.",
  },
  {
    label: "Regulators",
    body: "Map your jurisdiction's requirements to a common framework rather than enforcing bespoke interpretations of cloud risk.",
  },
  {
    label: "Technology teams",
    body: "Use published control catalogs and open-source validators to build and test compliant infrastructure from day one.",
  },
];

export default function TheStory() {
  return (  
    <HomeSection title="The Problem">

      <Accordion type="single" defaultValue="" collapsible className={styles.sectionStyle}>
        <AccordionItem value="problem">
          <AccordionTrigger className={styles.accordionStyle}>
            Financial institutions are moving to the public cloud, but the cloud wasn't built with
            financial services in mind.
          </AccordionTrigger>
          <AccordionContent className={styles.bodyStyle}>
            <p>
            Every major cloud provider works differently. That means every bank, insurer, and asset
            manager has to figure out, largely on their own, how to configure cloud services securely,
            meet their regulatory obligations, and prove to auditors that they've done it right.
            Multiply that effort across dozens of cloud services and a patchwork of regulators in the
            US, UK, EU, and beyond, and the result is enormous duplication of work, inconsistent
            security outcomes, and spiralling compliance costs.
          </p>
          <p className={styles.bodyStyle}>
            Regulators have taken notice. The US Treasury, UK HM Treasury, EU DORA, and the Monetary
            Authority of Singapore have all flagged the same core concerns: cloud providers lack
            transparency, no single firm can manage concentration risk alone, and the fragmented
            regulatory landscape is creating systemic vulnerability across the sector.
          </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2 className={styles.h2Style} style={{textAlign: "center" }}>The Solution: FINOS Common Cloud Controls</h2>
      <Accordion type="single" collapsible className={styles.sectionStyle}>
        <AccordionItem value="solution">
          <AccordionTrigger className={styles.accordionStyle}>
            FINOS CCC is an open industry standard that defines a consistent set of security,
            resiliency, and compliance controls for public cloud services, written once and usable
            across every major cloud provider.
          </AccordionTrigger>
          <AccordionContent className={styles.bodyStyle}>
            <p className={styles.bodyStyle}>
              Instead of each institution reinventing the wheel, CCC gives the whole financial services
              industry a shared baseline. Cloud providers can certify against it. Regulators can map
              their requirements to it. And banks can use it to deploy compliant cloud infrastructure
              with confidence, regardless of which cloud they're on.
            </p>
            <p className={styles.bodyStyle}>
              CCC classifies cloud services into a common taxonomy, builds a threat model for each
              service type using the MITRE ATT&CK framework, identifies the controls that mitigate
              those threats, and defines what compliant implementation looks like on each cloud
              provider. The result is a machine-verifiable standard that removes ambiguity for everyone.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div style={{ maxWidth: "780px", margin: "0 auto 2.5rem auto" }}>
        <h3 className={styles.h3Style} style={{ textAlign: "center" }}>Who Is It For?</h3>
      </div>
      <div style={audienceGridStyle}>
        {audiences.map(({ label, body }) => (
          <div key={label} style={audienceCardStyle}>
            <p style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{label}</p>
            <p className={styles.bodyStyle} style={{fontSize: "0.95rem", margin: "0" }}>{body}</p>
          </div>
        ))}
      </div>

      <p className={styles.bodyStyle} style={{ textAlign: "center", maxWidth: "780px", margin: "2rem auto 0 auto", fontSize: "0.95rem" }}>
        CCC is built openly, governed collaboratively, and backed by leading financial institutions,
        cloud providers, and technology organisations from across the industry. It lives on GitHub
        and welcomes contributors.
      </p>
    </HomeSection>
  );
}
