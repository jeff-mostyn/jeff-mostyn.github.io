import { Roles } from 'src/components/Util/util'

import banner from './banner.webp'
import cart3 from './cart3.png'
import cart3Rewrite from './cart3RewriteAndNextGen.png'
import typescript from '../../../media/typescript.png'
import react from '../../../media/react.png'
import tailwind from '../../../media/tailwind.png'
import { containerTypes, PortfolioItemData, visualizationTypes } from 'src/utils/portfolioSegmentTypes'

export const comcastData: PortfolioItemData = {
  banner: {
    image: banner,
    label: {
      "en": "Front-end Engineer @ Comcast",
      "ja": "コムキャストでのWebプログラマー"
    },
    tagline: {
      "en": "Development of business critical sales website features and initiatives",
      "ja": "ビジネスに重要な販売サイトの開発"
    },
  },
  content: {
    title: {
      "en": "Front-end Engineer @ Comcast",
      "ja": "コムキャストでのWebプログラマー"
    },
    roles: [
      Roles.UI_PROGRAMMING,
      Roles.PROGRAMMING,
    ],
    summary: {
      "en": "Develop features and provide support for Xfinity.com, the primary sales website of Comcast, the 4th largest global telecommunications company. The site has on average 60+ million visits and receives 250,000+ orders using my apps each month.",
      "ja": "Develop features and provide support for Xfinity.com, the primary sales website of Comcast, the 4th largest global telecommunications company. The site has on average 60+ million visits and receives 250,000+ orders using my apps each month."
    },
    containers: [
      {
        name: containerTypes.SIDE_BY_SIDE,
        heading: {
          text: {
            "en": "Xfinity.com Cart Rewrite & Next-Gen Pricing",
            "ja": "Xfinity.com Cart Rewrite & Next-Gen Pricing"
          },
          alignment: 'center',
          size: '1'
        },
        children: [
          {
            name: visualizationTypes.IMAGE,
            image: cart3Rewrite,
            altText: "Xfinity.com Cart 3 (2025)"
          },
          {
            name: visualizationTypes.SUMMARY,
            paragraphs: [
              {
                "en": "The Xfinity.com Cart Rewrite is a project which I spearheaded in order to improve developer usability, reduce cost, and create a better customer experience on our site. I migrated all of our business logic out of the Python AWS Lambda function in which it lived, and recreated it within our client-side TypeScript repository.",
                "ja": "The Xfinity.com Cart Rewrite is a project which I spearheaded in order to improve developer usability, reduce cost, and create a better customer experience on our site. I migrated all of our business logic out of the Python AWS Lambda function in which it lived, and recreated it within our client-side TypeScript repository."
              },
              {
                "en": "Making this change allowed for other teams working on the business critical Next-Gen Pricing initiative to quickly onboard into the Cart codebase to implement their required changes. This would not have been achievable in the required timeline without the Cart Rewrite.",
                "ja": "Making this change allowed for other teams working on the business critical Next-Gen Pricing initiative to quickly onboard into the Cart codebase to implement their required changes. This would not have been achievable in the required timeline without the Cart Rewrite."
              },
              {
                "en": "Additionally, since our business logic was simplified and moved client-side, API response times for updates and visualizations of the Cart were reduced by an average of 500ms, or 50%. With these calls happening many times each customer session, this time savings created a dramatic improvement in user experience.",
                "ja": "Additionally, since our business logic was simplified and moved client-side, API response times for updates and visualizations of the Cart were reduced by an average of 500ms, or 50%. With these calls happening many times each customer session, this time savings created a dramatic improvement in user experience."
              },
            ]
          }
        ],
        reverse: false
      },
      {
        name: containerTypes.SIDE_BY_SIDE,
        heading: {
          text: {
            "en": "Xfinity Sales Site Cart 3",
            "ja": "Xfinity Sales Site Cart 3"
          },
          alignment: 'center',
          size: '1'
        },
        children: [
          {
            name: visualizationTypes.IMAGE,
            image: cart3,
            altText: "Xfinity.com Cart 3 (2023)"
          },
          {
            name: visualizationTypes.SUMMARY,
            paragraphs: [
              {
                "en": "Cart 3, an initiative on which I served as tech lead, was a significant overhaul to the Shopping Cart's frontend codebase. Among our objectives were: transitioning it from JavaScript to TypeScript, migrating the FE code to a growing sales site monorepo, and modernizing its visual design.",
                "ja": "Cart 3, an initiative on which I served as tech lead, was a significant overhaul to the Shopping Cart's frontend codebase. Among our objectives were: transitioning it from JavaScript to TypeScript, migrating the FE code to a growing sales site monorepo, and modernizing its visual design."
              },
              {
                "en": "Beyond technical and visual improvements, we also delivered on key business asks during the development of Cart 3. Chief among these was the ability to side-by-side with hosting apps. This was a feat that was the result of much cross-team collaboration, which became increasingly important as the Cart's interactions with the site pages became more substantial through this project.",
                "ja": "Beyond technical and visual improvements, we also delivered on key business asks during the development of Cart 3. Chief among these was the ability to side-by-side with hosting apps. This was a feat that was the result of much cross-team collaboration, which became increasingly important as the Cart's interactions with the site pages became more substantial through this project."
              },
            ]
          }
        ],
        reverse: true
      }
    ]
  },
  icons: [typescript, react, tailwind],
  path: "comcast_web_frontend"
}

export default comcastData;