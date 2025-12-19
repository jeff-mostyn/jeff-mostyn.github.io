import { PortfolioItemData } from "src/utils/portfolioSegmentTypes";
import { Roles } from "src/components/Util/util";
import hero from './hero.webp'
import figma from '../../../media/figma.png'

export const gameLogData: PortfolioItemData = {
  banner: {
    image: hero,
    label: {
      "en": "GameLog Design Case Study",
      "ja": "GameLog Design Case Study"
    },
    tagline: {
      "en": "Exploring the design of an application for tracking one's video game collection",
      "ja": "Exploring the design of an application for tracking one's video game collection"
    }
  },
  content: {
    title: {
      "en": "",
      "ja": ""
    },
    roles: [ Roles.UI_UX ],
    summary: undefined,
    containers: []
  },
  icons: [figma],
  path: ""
}