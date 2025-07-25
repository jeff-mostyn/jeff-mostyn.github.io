import { Roles } from 'src/components/Util/util'

import banner from './banner.webp'
import cart3 from './cart3.png'
import cart3Rewrite from './cart3RewriteAndNextGen.png'
import typescript from '../../../media/typescript.png'
import react from '../../../media/react.png'
import tailwind from '../../../media/tailwind.png'

export const comcastData = {
  "banner": {
    "image": banner,
    "label": {
      "en": "Front-end Engineer @ Comcast",
      "ja": "コムキャストでのWebプログラマー"
    },
    "tagline": {
      "en": "Development of business critical sales website features and initiatives",
      "ja": "ビジネスに重要な販売サイトの開発"
    },
  },
  "content": {
    "title": {
      "en": "Front-end Engineer @ Comcast",
      "ja": "コムキャストでのWebプログラマー"
    },
    "roles": [
      Roles.UI_PROGRAMMING,
      Roles.PROGRAMMING,
    ],
    "hyperlinks": [],
    "involvement": [],
    "accomplishments": [],
    "skills": [],
    "sections": [
      {
        "title": "Xfinity.com Cart Rewrite & Next-Gen Pricing",
        "image": cart3Rewrite,
        "description": [
          "The Xfinity.com Cart Rewrite is a project which I spearheaded in order to improve developer usability, reduce cost, and create a better customer experience on our site. I migrated all of our business logic out of the Python AWS Lambda function in which it lived, and recreated it within our client-side TypeScript repository.",
          "Making this change allowed for other teams working on the business critical Next-Gen Pricing initiative to quickly onboard into the Cart codebase to implement their required changes. This would not have been achievable in the required timeline without the Cart Rewrite.",
          "Additionally, since our business logic was simplified and moved client-side, API response times for updates and visualizations of the Cart were reduced by an average of 500ms, or 50%. With these calls happening many times each customer session, this time savings created a dramatic improvement in user experience."
        ],
        "imageLeft": true
      },
      {
        "title": "Xfinity Sales Site Cart 3",
        "image": cart3,
        "description": [
          "Cart 3, an initiative on which I served as tech lead, was a significant overhaul to the Shopping Cart's frontend codebase. Among our objectives were: transitioning it from JavaScript to TypeScript, migrating the FE code to a growing sales site monorepo, and modernizing its visual design.",
          "Beyond technical and visual improvements, we also delivered on key business asks during the development of Cart 3. Chief among these was the ability to side-by-side with hosting apps. This was a feat that was the result of much cross-team collaboration, which became increasingly important as the Cart's interactions with the site pages became more substantial through this project."
        ],
        "imageLeft": false
      }
    ]
  },
  "icons": [typescript, react, tailwind],
  "path": "/Portfolio/RacingGame"
}

export default comcastData;