import React from "react";
import styles from "./BenefitCarouselCard2.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope, faMoneyBills } from "@fortawesome/free-solid-svg-icons";

export interface BenefitCarouselCard2 {
  className?: string;
  title?: string;
}

export const BenefitCarouselCard2: React.FC<BenefitCarouselCard2> = ({
  className = "",
  title ="Default title"
}) => (
  <div className={styles.CarouselCard}>
    <div>
      <FontAwesomeIcon
        icon={faEarthEurope}
        className={`${styles.fontAwesomeIcon} ${styles.icon}`}
      />
    </div>
    <div className={styles.textGroup}>
      <p className={styles.title}>{title}</p>
      <p className={styles.body}>
        Don't let borders limit your sales potential. With our platform, you can
        sell your products or services to customers worldwide
      </p>
    </div>
  </div>
);
