import React from "react";
import styles from "./BenefitCarouselCard2.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope, faMoneyBills } from "@fortawesome/free-solid-svg-icons";

export interface BenefitCarouselCard2 {
  className?: string;
}

export const BenefitCarouselCard2: React.FC<BenefitCarouselCard2> = ({
  className = "",
}) => (
  <div className={styles.CarouselCard}>
    <div className={styles.icon}>
      <FontAwesomeIcon icon={faEarthEurope} />
    </div>
    <h2>Heading 2</h2>
  </div>
);
