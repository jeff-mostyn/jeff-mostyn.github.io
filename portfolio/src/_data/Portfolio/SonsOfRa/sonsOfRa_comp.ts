import { Roles } from 'src/components/Util/util'

import banner from './sor_banner.webp'
import radialMenu from '../../WorkSamples/radialMenu.gif'
import unity from '../../../media/unity.png'
import csharp from '../../../media/csharp.png'
import { containerTypes, PortfolioItemData, visualizationTypes } from 'src/utils/portfolioSegmentTypes'

export const sonsOfRaData: PortfolioItemData = {
  banner: {
    image: banner,
    label: {
      "en": "Sons of Ra",
      "ja": "サンズ・オブ・ラー"
    },
    tagline: {
       "en": "Competitive tower defense game that draws on ancient Egyptian mythology",
      "ja": "エジプト神話に基づいた2プレーヤー競争的なタワー・ディフェンス・ゲーム"
    },
  },
  content: {
    title: {
      "en": "Sons of Ra",
      "ja": "サンズ・オブ・ラー"
    },
    roles: [
      Roles.PROGRAMMING,
      Roles.UI_PROGRAMMING,
      Roles.DESIGN
    ],
    summary: {
      "en": "Sons of Ra is an award winning two-player competitive tower defense game where players take control of opposing pharaohs in Egypt. Send your armies and build up defenses in a fast-paced strategy game designed for competition between two local or online players. Choose a patron deity and unleash mighty abilities to turn the tide of battle, or expand your kingdom to gain a strategic edge.",
      "ja": "賞をもらったサンズ・オブ・ラーはプレイヤーが反対エジプトのファラオをコントロールする2プレーヤー競争的なタワー・ディフェンス・ゲームです。このペースが速い戦略ゲームで、軍隊をコマンドしたり防御を築いたり、神々の力で相手を倒したりします。領域を膨らんで、エジプトを克服する。",
    },
    containers: [
      {
        name: containerTypes.HYPERLINKS,
        links: [
          {
            text: {
              "en": "Steam Store Page",
              "ja": "Steam ページ"
            },
            url: "https://store.steampowered.com/app/1134020/Sons_of_Ra/"
          },
          {
            text: {
              "en": "First Prize - E3 2019 College Game Competition",
              "ja": "E3 2019 大学生が作ったゲームの一等賞"
            },
            url: "https://6abc.com/e3-2019-college-game-competition-video-awards/5346550/"
          },
          {
            text: {
              "en": "FTW Philly TV Spot",
              "ja": "FTW Philly ミニ・ドキュメンタリー"
            },
            url: "https://youtu.be/0B0YYqkLePk?si=LbNTnWJLRq61mk_B&t=880"
          },
          {
            text: {
              "en": "Drexel University 40 Under 40",
              "ja": "ドレクセル大学の「40 Under 40」"
            },
            url: "https://drexelmagazine.org/2020/code-like-an-egyptian/"
          },
        ]
      },
      {
        name: containerTypes.SIDE_BY_SIDE,
        children: [
          {
            name: visualizationTypes.YOUTUBE,
            id: "3aAvEn6kEM4?si=BDdoSWe8pDN1VFuj",
          },
          {
            name: visualizationTypes.LIST_AND_SUMMARY,
            list: [
              {
                "en": "Led development of gameplay systems and mechanics",
                "ja": "ゲームのシステムと機能の開発の指導"
              },
              {
                "en": "Implemented Radial UI that is friendly for both controller and keyboard & mouse users",
                "ja": "ゲームパッドでもキーボードでも簡単に使える「Radial UI」"
              },
              {
                "en": "Programmed Peer-to-Peer Networked Multiplayer with Facepunch.Steamworks",
                "ja": "「Facepunch.Steamworks」を用いて、P2Pオンライン・マルチプレイヤー・モードの開発"
              },
              {
                "en": "Designed and developed Unit Behavior Architecture, which dictates the actions of 7 unit types",
                "ja": "7種類のユニットの行動を決めるシステム"
              },
              {
                "en": "Coded Menu UI systems and implemented UX requirements",
                "ja": "UXデザイナーの請求に合うUIのプログラミング"
              },
            ],
            reverse: false,
            summary: [
              {
                "en": "Sons of Ra began as a 6-month class project at Drexel University built around a concept I proposed, after which myself and three of my teammates continued development through to and following graduation. During this time, Sons of Ra won multiple competitions for student-created games, including at E3 2019. Given the small size of our team, I was involved in most all aspects of development, though primarily I served as the lead programmer. Sons of Ra released on Steam in April of 2021.",
                "ja": "Sons of Ra began as a 6-month class project at Drexel University built around a concept I proposed, after which myself and three of my teammates continued development through to and following graduation. During this time, Sons of Ra won multiple competitions for student-created games, including at E3 2019. Given the small size of our team, I was involved in most all aspects of development, though primarily I served as the lead programmer. Sons of Ra released on Steam in April of 2021."
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
            "en": "Radial UI",
            "ja": "Radial UI"
          },
          alignment: 'center',
          size: '1'
        },
        children: [
          {
            name: visualizationTypes.IMAGE,
            image: radialMenu,
            altText: "Radial UI GIF"
          },
          {
            name: visualizationTypes.SUMMARY,
            paragraphs: [
              {
                "en": "The Radial Menu in Sons of Ra was an immense design challenge. In a game that often hinged on quick decisions, we wanted players to be able to access any of their possible actions quickly and intuitively, be it with keyboard or controller.",
                "ja": "The Radial Menu in Sons of Ra was an immense design challenge. In a game that often hinged on quick decisions, we wanted players to be able to access any of their possible actions quickly and intuitively, be it with keyboard or controller."
              },
              {
                "en": "Our game has 3 main action types: unit spawning, tower placement, and active ability usage, with each of these having 4 associated options. We saw this as a natural point on which to base our UI, so we chose to separate the Radial into 3 sections, each with 4 sub-zones. The section the player is engaging with has its options displayed, while those of the other two are obscured to avoid information overload. With this setup, only one action in the game takes more than two button presses to accomplish (and none more than three), which allows players to act quickly and decisively.",
                "ja": "Our game has 3 main action types: unit spawning, tower placement, and active ability usage, with each of these having 4 associated options. We saw this as a natural point on which to base our UI, so we chose to separate the Radial into 3 sections, each with 4 sub-zones. The section the player is engaging with has its options displayed, while those of the other two are obscured to avoid information overload. With this setup, only one action in the game takes more than two button presses to accomplish (and none more than three), which allows players to act quickly and decisively."
              },
            ]
          }
        ],
        reverse: true
      }
    ]
  },
  icons: [unity, csharp ],
  path: "comcast_web_frontend"
}

export default sonsOfRaData;