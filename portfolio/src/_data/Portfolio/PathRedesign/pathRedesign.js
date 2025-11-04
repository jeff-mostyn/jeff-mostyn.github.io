import { Roles } from 'src/components/Util/util';

import banner from './banner.png';
import figma from '../../../media/figma.png';

import wireframe from './wireframe.png';
import hires from './hires.png';

export const pathResignData = {
  "banner": {
    "image": banner,
    "label": {
      "en": "Path@Penn Redesign",
      "ja": "Path@Penn Redesign"
    },
    "tagline": {
      "en": "Research-based Redesign of Penn's Course Registration Site",
      "ja": "Research-based Redesign of Penn's Course Registration Site"
    },
  },
  "content": {
    "title": {
      "en": "Penn Course Registration Site Redesign",
      "ja": "Penn Course Registration Site Redesign"
    },
    "roles": [
      Roles.UI_UX,
    ],
    "summary": {
      "en": "A front-to-back exercise in user experience research, analysis, and development, seeking to find a solution to difficulties faced by many students at the University of Pennsylvania in utilizing important academic tools.",
      "ja": "A front-to-back exercise in user experience research, analysis, and development, seeking to find a solution to difficulties faced by many students at the University of Pennsylvania in utilizing important academic tools.",
    },
    "keyImage": hires,
    "keyImageComparison": wireframe,
    "hyperlinks": [],
    "reverseLeadSection": true,
    "involvement": [
      "Beginning by interviewing with students about their course registration experiences, I collected data, identified key issues, and sought to solve them through updated designs.",
      // "As I already have a background in front-end web development, I drew on lessons I learned and things I have noticed in the professional UX samples I work with on a daily basis. In doing so, I created a cleaner UX for the site that conforms to modern standards while retaining the information and functionality the current application presents."
    ],
    "accomplishments": [
      "Compiled questions and created interview plans in order to gather key information about students' experience with the current course registration site",
      "Analyzed data collected from interviews, arriving at a set of primary concerns regarding site, as well as important existing functionality to be preserved and emphasized",
      "Drafted sketches and wireframe mockups to visualize possible methods of addressing the issues derived from the interview data",
      "Based on wireframes, created component-based designs in Figma that provide inferred improvements on the course registration flow as it exists today"
    ],
    "skills": [],
    "sections": [
    ]
  },
  "icons": [figma],
  "path": "path_at_penn"
}

export default pathResignData;