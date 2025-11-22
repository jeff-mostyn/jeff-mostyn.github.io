import { Roles } from 'src/components/Util/util'

import banner from './banner.png';
import figma from '../../../media/figma.png';
import hires from './hires.png';
import wireframe from './wireframe.png';
import { containerTypes, PortfolioItemData, visualizationTypes } from 'src/utils/portfolioSegmentTypes'

export const comcastData: PortfolioItemData = {
  banner: {
    image: banner,
    label: {
      "en": "Path@Penn Redesign",
      "ja": "Path@Penn Redesign"
    },
    tagline: {
      "en": "Research-based Redesign of Penn's Course Registration Site",
      "ja": "Research-based Redesign of Penn's Course Registration Site"
    },
  },
  content: {
    title: {
      "en": "Path@Penn Redesign",
      "ja": "Path@Penn Redesign"
    },
    roles: [
      Roles.UI_UX,
    ],
    summary: {
      "en": "A front-to-back exercise in user experience research, analysis, and development, seeking to find a solution to difficulties faced by many students at the University of Pennsylvania in utilizing important academic tools.",
      "ja": "A front-to-back exercise in user experience research, analysis, and development, seeking to find a solution to difficulties faced by many students at the University of Pennsylvania in utilizing important academic tools.",
    },
    containers: [
      {
        name: containerTypes.SIDE_BY_SIDE,
        children: [
          {
            name: visualizationTypes.IMAGE_COMPARE,
            image1: hires,
            altText1: "High Resolution",
            image2: wireframe,
            altText2: "Wireframe"
          },
          {
            name: visualizationTypes.LIST_AND_SUMMARY,
            list: [
              {
                "en": "Compiled questions and created interview plans in order to gather key information about students' experience with the current course registration site",
                "ja": "Compiled questions and created interview plans in order to gather key information about students' experience with the current course registration site",
              },
              {
                "en": "Analyzed data collected from interviews, arriving at a set of primary concerns regarding site, as well as important existing functionality to be preserved and emphasized",
                "ja": "Analyzed data collected from interviews, arriving at a set of primary concerns regarding site, as well as important existing functionality to be preserved and emphasized",
              },
              {
                "en": "Drafted sketches and wireframe mockups to visualize possible methods of addressing the issues derived from the interview data",
                "ja": "Drafted sketches and wireframe mockups to visualize possible methods of addressing the issues derived from the interview data",
              },
              {
                "en": "Based on wireframes, created component-based designs in Figma that provide inferred improvements on the course registration flow as it exists today",
                "ja": "Based on wireframes, created component-based designs in Figma that provide inferred improvements on the course registration flow as it exists today",
              },
            ],
            reverse: true,
            summary: [
              {
                "en": "Beginning by interviewing with students about their course registration experiences, I collected data, identified key issues, and sought to solve them through updated designs.",
                "ja": "Beginning by interviewing with students about their course registration experiences, I collected data, identified key issues, and sought to solve them through updated designs."
              },
            ]
          }
        ],
        reverse: false
      },
    ], 
  },
  icons: [figma],
  path: "path_at_penn"
}

export default comcastData;