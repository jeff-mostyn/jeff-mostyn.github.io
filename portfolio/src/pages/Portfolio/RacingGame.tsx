import React from "react";

import racingGameData from '../../_data/Portfolio/RacingGame/racingGame'

import { PortfolioItemData } from "src/components/Portfolio/FeatureDisplay";
import { PortfolioPage } from "./PortfolioPage";

export const RacingGame = () => {
  return (
    <PortfolioPage data={racingGameData} />
  )
}