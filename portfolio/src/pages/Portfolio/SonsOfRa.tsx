import React from "react";

import sonsOfRaData from '../../_data/Portfolio/SonsOfRa/sonsOfRa'

import { PortfolioItemData } from "src/components/Portfolio/FeatureDisplay";
import { PortfolioPage } from "./PortfolioPage";

export const SonsOfRa = () => {
  const data: PortfolioItemData = sonsOfRaData;

  return (
    <PortfolioPage data={sonsOfRaData} />
  )
}