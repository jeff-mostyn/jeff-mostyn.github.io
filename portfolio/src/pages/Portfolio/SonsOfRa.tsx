import React from "react";
import { PortfolioItemData } from "src/components/Portfolio/FeatureDisplay";

import sorData from "src/_data/Portfolio/SonsOfRa/sonsOfRa"
import { PortfolioPage } from "./PortfolioPage";

export const SonsOfRa = ( ) => {

  const data: PortfolioItemData = sorData;

  return (
    <PortfolioPage data={data} />
  )
}