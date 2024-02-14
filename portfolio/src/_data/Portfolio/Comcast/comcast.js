import { Roles } from 'src/components/Util/util'

import banner from './banner.png'
import cart3 from './cart3.png'
import typescript from '../../../media/typescript.png'
import react from '../../../media/react.png'
import tailwind from '../../../media/tailwind.png'

export const racingGameData = {
  "banner": {
    "image": banner,
    "label": "Front-end Engineer @ Comcast",
    "tagline": "Development of business critical sales website features and initiatives"
  },
  "content": {
    "title": "Front-end Engineer @ Comcast",
    "roles": [
      Roles.PROGRAMMING,
    ],
    "hyperlinks": [],
    "involvement": [],
    "accomplishments": [],
    "skills": [],
    "sections": [
      {
        "title": "Xfinity Sales Site Cart 3",
        "image": cart3,
        "description": [
          "Cart 3, an initiative on which I served as tech lead, was a significant overhaul to the Shopping Cart's frontend codebase. Among our objectives were: transitioning it from JavaScript to TypeScript, migrating the FE code to a growing sales site monorepo, and modernizing its visual design.",
          "Beyond technical and visual improvements, we also delivered on key business asks during the development of Cart 3. Chief among these was the ability to side-by-side with hosting apps. This was a feat that was the result of much cross-team collaboration, which became increasingly important as the Cart's interactions with the site pages became more substantial through this project."
        ],
        "imageLeft": true
      }
    ]
  },
  "icons": [typescript, react, tailwind],
  "path": "/Portfolio/RacingGame"
}

export default racingGameData;