import banner from './racingGame_banner.webp'
import main_menu_flow from './main_menu_flow.gif'
import keyImage from './racingGame_keyImage.png'
import characterSelect from './nova_charSelect.gif'
import racing_game_feature from './racing_game_feature.gif';

import unreal_notext from '../../../media/unreal_notext.png'
import cpp from '../../../media/cpp.png'

import { Roles } from 'src/components/Util/util';

export const racingGameData = {
  "banner": {
    "image": banner,
    "label": {
      "en": "Nova Chasers",
      "ja": "ノヴァ・チェーサーズ"
    },
    "tagline": {
      "en": "Anti-grav racer inspired by F-Zero and Mario Kart",
      "ja": "F-Zeroとマリオカートからインスピレーションを受けたアンチグラビティー・レーシング・ゲーム"
    }
  },
  "content": {
    "title": {
      "en": "Nova Chasers",
      "ja": "ノヴァ・チェーサーズ"
    },
    "roles": [
      Roles.PROGRAMMING,
      Roles.UI_UX,
      Roles.UI_PROGRAMMING,
      Roles.TECH_ART,
      Roles.ANIMATION
    ],
    "summary": {
      "en": "Nova Chasers seeks to emulate the adrenaline of F-Zero's lightning-fast gameplay, while also incorporating the accesibility and casual fun of Mario Kart. Gain advantage with the careful use of items and your vehicle's boost gauge, but be careful as your opponents have access to the same dangerous tools. Weave through the skyscrapers of the cities of future America at breakneck speed as you aim to become the greatest racer alive.",
      "ja": "ノヴァ・チェーサーズ、F-Zeroの超速いゲームプレイもMario Kartのカジュアル楽しさもプレイヤーに伝えてみます。アイテムやブーストで相手に勝ってみるけど、相手もその道具が使えるので気を付けて。未来アメリカの都市を快速で飛び込んで、世界一のレーサーになれ！",
    },
    "hyperlinks": [],
    "keyImage": racing_game_feature,
    "involvement": [
      "For this project, I explored aspects of development that were new to me, and deepened my experience with others. My Master's degree program at the University of Pennsylvania was my first exposure to shader writing, and the visual effects here were the perfect chance to put that learning into practice. I also did more in the realm of UI/UX than I ever had in a game before, moving beyond just writing its code to also create the designs, effects, and much of the art myself, excluding the characters and item icons.",
      "Furthermore, I've programmed a number of gameplay mechanics and systems, animated, and used my cross-disciplinary experience to bridge the gap between the tech and art specialists.",
    ],
    "accomplishments": [
      "Designed and developed most in-game UI, including main menus and HUD",
      "Programmed functionality of items & item pickups",
      "Created VFX and post-process shaders for holograms, vehicle cel shading, and outlines",
      "Animated vehicles and in-game actors",
      "Performed varied programming duties and resolved technical defects"
    ],
    "skills": [],
    "sections": [
      // {
      //   "title": "Main Menu Flow",
      //   "image": main_menu_flow,
      //   "description": [
      //     "When I began to design the main menu, I asked the project director what sort of style he envisioned for it, and the suggestion that was given to me was to aim for clean and futuristic, with just a little rebellious flavor. With that, and without so much as a wireframe, I began to lay things out in Unreal's Slate UI to start envisioning where I could go with the design.",
      //     "Ultimately, I chose to keep controls to the left of the screen so as to allow the right half for displaying information and thematic flair. As for design, I began with sharp-angled black and white elements, and lit up selected buttons with a yellow-orange gradient which hearkens back to our iconography, while having a sharp black shadow strike behind them on selection. This splashy treatment makes for sharp contrast next to the simplicity of the other UI elements, and incorporates a litle of that 'rebellious' feeling."
      //   ],
      //   "imageLeft": false
      // },
      {
        "title": "Character Select",
        "image": characterSelect,
        "description": [
          "My goal when designing the character select screen was to maintain readability of the roster while prominently highlighting our character and vehicle art, and to do so with a sleek, stylish UI. To do this, I often referred to spacing and arrangement decisions made in other character-focused games, like Overwatch and MiHoYo's Genshin Impact and Honkai: Star Rail.",
          "The character cards in particular went through a number of design iterations. Initially with much sharper corners and font styles, I opted to round things out a little bit while also adding additional subtle detail to the cards, specifically the gradient background fields which have had subtle \"digitization\" and noise effects applied. The screen is still a work in progress, and I hope to add more to the right half of the screen, including unique wordmarks for the characters' names."
        ],
        "imageLeft": false
      },
      {
        "title": "Racing Heads-Up-Display",
        "image": keyImage,
        "description": [
          "The process of designing the Heads-Up Display mandated that I balance a number of asks with the need to maintain readability. Specifically, two requirements were that character portraits be highly visible, and that it be abundantly clear when a character holds an item. Pushing either of those elements too far would block visbility in a fast-paced, visually busy game, so finding a way to compromise was key.",
          "In doing so, I found a way to address another issue that we were discovering. We had found that opponents were often hard to see on the track, so rather than fix full-size portraits to the side of the viewport, which I found to be a readability concern, I made it so nearby opponents had their portrait and placement hovering above them. This helped to avoid cluttering the HUD, while also keeping our characters in the forefront."
        ],
        "imageLeft": true
      },
      
    ]
  },
  "icons": [
    unreal_notext,
    cpp
  ],
  "path": "/Portfolio/RacingGame"
}

export default racingGameData;