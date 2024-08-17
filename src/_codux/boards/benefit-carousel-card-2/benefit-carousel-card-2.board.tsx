import React from "react";
import { createBoard } from "@wixc3/react-board";
import { BenefitCarouselCard2 } from "../../../components/new-component/BenefitCarouselCard2";
import styles from "./benefit-carousel-card-2.board.module.css";

export default createBoard({
  name: "BenefitCarouselCard2",
  Board: () => <BenefitCarouselCard2 />,
  isSnippet: true,
  environmentProps: {
    windowWidth: 1078,
  },
});
