import React from "react";
import { createBoard } from "@wixc3/react-board";
import { BenefitCarouselCard2 } from "../../../components/new-component/BenefitCarouselCard2";

export default createBoard({
  name: "BenefitCarouselCard2",
  Board: () => <BenefitCarouselCard2 />,
  isSnippet: true,
});
