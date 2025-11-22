import { Roles } from 'src/components/Util/util'

import characterSelect from './nova_charSelect.gif'
import cplusplus from '../../../media/cpp.png';
import keyImage from './racingGame_keyImage.png'
import racing_game_feature from './racing_game_feature.gif';
import racingGameBanner from './racingGame_banner.webp';
import unreal from '../../../media/unreal_notext.png';
import { containerTypes, PortfolioItemData, visualizationTypes } from 'src/utils/portfolioSegmentTypes'

export const comcastData: PortfolioItemData = {
  banner: {
    image: racingGameBanner,
    label: {
      "en": "Nova Chasers",
      "ja": "ノヴァ・チェーサーズ"
    },
    tagline: {
      "en": "Anti-grav racer inspired by F-Zero and Mario Kart",
      "ja": "F-Zeroとマリオカートから影響を受けたアンチグラビティー・レーシング・ゲーム"
    },
  },
  content: {
    title: {
      "en": "Nova Chasers",
      "ja": "ノヴァ・チェーサーズ"
    },
    roles: [
      Roles.PROGRAMMING,
      Roles.UI_UX,
      Roles.UI_PROGRAMMING,
      Roles.TECH_ART,
      Roles.ANIMATION
    ],
    summary: {
      "en": "Nova Chasers seeks to emulate the adrenaline of F-Zero's lightning-fast gameplay, while also incorporating the accesibility and casual fun of Mario Kart. Gain advantage with the careful use of items and your vehicle's boost gauge, but be careful as your opponents have access to the same dangerous tools. Weave through the skyscrapers of the cities of future America at breakneck speed as you aim to become the greatest racer alive.",
      "ja": "ノヴァ・チェーサーズ、F-Zeroの超速いゲームプレイもMario Kartのカジュアル楽しさもプレイヤーに伝えてみます。アイテムやブーストで相手に勝ってみるけど、相手もその道具が使えるので気を付けて。未来アメリカの都市を快速で飛び込んで、世界一のレーサーになれ！",
    },
    containers: [
      {
        name: containerTypes.HYPERLINKS,
        links: [
          {
            text: {
              "en": "Playable Build (Google Drive)",
              "ja": "ゲーム・ダウンロード（グーグルドライブ）"
            },
            url: "https://drive.google.com/file/d/17-ZS8PGc-7QHmIJU9x6x33ECIhkFZhGf/view?usp=sharing"
          },
          {
            text: {
              "en": "Demo Video (YouTube)",
              "ja": "ゲームプレイ動画（YouTube）"
            },
            url: "https://www.youtube.com/watch?v=qr_dv6Tl9j8"
          }
        ],
      },
      {
        name: containerTypes.SIDE_BY_SIDE,
        children: [
          {
            name: visualizationTypes.IMAGE,
            image: racing_game_feature,
            altText: "Nova Chasers In-Action"
          },
          {
            name: visualizationTypes.LIST_AND_SUMMARY,
            list: [
              {
                "en": "Designed and developed most in-game UI, including main menus and HUD",
                "ja": "Designed and developed most in-game UI, including main menus and HUD",
              },
              {
                "en": "Programmed functionality of items & item pickups",
                "ja": "Programmed functionality of items & item pickups",
              },
              {
                "en": "Created VFX and post-process shaders for holograms, vehicle cel shading, and outlines",
                "ja": "Created VFX and post-process shaders for holograms, vehicle cel shading, and outlines",
              },
              {
                "en": "Animated vehicles and in-game actors",
                "ja": "Animated vehicles and in-game actors",
              },
              {
                "en": "Performed varied programming duties and resolved technical defects",
                "ja": "Performed varied programming duties and resolved technical defects",
              },
            ],
            reverse: false,
            summary: [
              {
                "en": "In developing Nova Chasers, I explored aspects of development that were new to me, and deepened my experience with others. My Master's degree program at the University of Pennsylvania was my first exposure to shader writing, and the visual effects here were the perfect chance to put that learning into practice. I also did more in the realm of UI/UX than I ever had in a game before, moving beyond just writing its code to also create the designs, effects, and much of the art myself, excluding the characters and item icons.",
                "ja": "In developing Nova Chasers, I explored aspects of development that were new to me, and deepened my experience with others. My Master's degree program at the University of Pennsylvania was my first exposure to shader writing, and the visual effects here were the perfect chance to put that learning into practice. I also did more in the realm of UI/UX than I ever had in a game before, moving beyond just writing its code to also create the designs, effects, and much of the art myself, excluding the characters and item icons."
              },
              {
                "en": "Furthermore, I've programmed a number of gameplay mechanics and systems, animated, and used my cross-disciplinary experience to bridge the gap between the tech and art specialists.",
                "ja": "Furthermore, I've programmed a number of gameplay mechanics and systems, animated, and used my cross-disciplinary experience to bridge the gap between the tech and art specialists.",
              },
            ]
          }
        ],
        reverse: false
      },
      {
        name: containerTypes.SIDE_BY_SIDE,
        heading: {
          "en": "Character Select",
          "ja": "Character Select"
        },
        children: [
          {
            name: visualizationTypes.IMAGE,
            image: characterSelect,
            altText: "Character Select In-Action"
          },
          {
            name: visualizationTypes.SUMMARY,
            paragraphs: [
              {
                "en": "My goal when designing the character select screen was to maintain readability of the roster while prominently highlighting our character and vehicle art, and to do so with a sleek, stylish UI. To do this, I often referred to spacing and arrangement decisions made in other character-focused games, like Overwatch and MiHoYo's Genshin Impact and Honkai: Star Rail.",
                "ja": "My goal when designing the character select screen was to maintain readability of the roster while prominently highlighting our character and vehicle art, and to do so with a sleek, stylish UI. To do this, I often referred to spacing and arrangement decisions made in other character-focused games, like Overwatch and MiHoYo's Genshin Impact and Honkai: Star Rail.",
              },
              {
                "en": "The character cards in particular went through a number of design iterations. Initially with much sharper corners and font styles, I opted to round things out a little bit while also adding additional subtle detail to the cards, specifically the gradient background fields which have had subtle \"digitization\" and noise effects applied. The screen is still a work in progress, and I hope to add more to the right half of the screen, including unique wordmarks for the characters' names.",
                "ja": "The character cards in particular went through a number of design iterations. Initially with much sharper corners and font styles, I opted to round things out a little bit while also adding additional subtle detail to the cards, specifically the gradient background fields which have had subtle \"digitization\" and noise effects applied. The screen is still a work in progress, and I hope to add more to the right half of the screen, including unique wordmarks for the characters' names."
              },
            ]
          }
        ],
        reverse: true
      },
      {
        name: containerTypes.SIDE_BY_SIDE,
        heading: {
          "en": "Racing Heads-Up Display",
          "ja": "Racing Heads-Up Display"
        },
        children: [
          {
            name: visualizationTypes.IMAGE,
            image: keyImage,
            altText: "Heads-Up Display"
          },
          {
            name: visualizationTypes.SUMMARY,
            paragraphs: [
              {
                "en": "The process of designing the Heads-Up Display mandated that I balance a number of asks with the need to maintain readability. Specifically, two requirements were that character portraits be highly visible, and that it be abundantly clear when a character holds an item. Pushing either of those elements too far would block visbility in a fast-paced, visually busy game, so finding a way to compromise was key.",
                "ja": "The process of designing the Heads-Up Display mandated that I balance a number of asks with the need to maintain readability. Specifically, two requirements were that character portraits be highly visible, and that it be abundantly clear when a character holds an item. Pushing either of those elements too far would block visbility in a fast-paced, visually busy game, so finding a way to compromise was key.",
              },
              {
                "en": "In doing so, I found a way to address another issue that we were discovering. We had found that opponents were often hard to see on the track, so rather than fix full-size portraits to the side of the viewport, which I found to be a readability concern, I made it so nearby opponents had their portrait and placement hovering above them. This helped to avoid cluttering the HUD, while also keeping our characters in the forefront.",
                "ja": "In doing so, I found a way to address another issue that we were discovering. We had found that opponents were often hard to see on the track, so rather than fix full-size portraits to the side of the viewport, which I found to be a readability concern, I made it so nearby opponents had their portrait and placement hovering above them. This helped to avoid cluttering the HUD, while also keeping our characters in the forefront."
              },
            ]
          }
        ],
        reverse: false
      }
    ], 
  },
  icons: [unreal, cplusplus],
  path: "nova_chasers"
}

export default comcastData;