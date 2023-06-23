
import React from "react";
import styles from "./hero.module.scss";
import { changane } from "@/app/styles/font";

export const HeroBanner = (props) => {
  const { title, description,img } = props;
  return (
    <section
      className={styles.hero_banner}
      style={{
        backgroundImage:`url(${img})`,
      }}
    >
      <div className="container">
        <div className={styles.hero_content}>
          <h1 data-aos="fade-up" className={`${changane.className} ${styles.title}`}>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
