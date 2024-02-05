import cart3_img from './cart3.png'
import racingGame_characterSelect from './racingGame_characterSelect.png'
import radialMenu from './radialMenu.gif'
import racingGame_hud from '../Portfolio/RacingGame/racingGame_keyImage.png'

import { Roles } from 'src/components/Util/util';

const data = [
  {
    "image": cart3_img,
    "title": "Xfinity Sales Website Cart 3",
    "tags": [
      Roles.PROGRAMMING,
    ],
    "description": [
      "Cart 3, an initiative on which I served as tech lead, was a significant overhaul to the Shopping Cart's frontend codebase. Among our objectives were: transitioning it from JavaScript to TypeScript, migrating the FE code to a growing sales site monorepo, and modernizing its visual design.",
      "Beyond technical and visual improvements, we also delivered on key business asks during the development of Cart 3. Chief among these was the ability to side-by-side with hosting apps. This was a feat that was the result of much cross-team collaboration, which became increasingly important as the Cart's interactions with the site pages became more substantial through this project."
    ]
  },
  {
    "image": racingGame_characterSelect,
    "title": "Racing Game Character Select",
    "tags": [
      Roles.PROGRAMMING,
      Roles.UI_UX
    ],
    "description": [
      "My goal when designing the character select screen was to maintain readability of the roster while prominently highlighting our character and vehicle art, and to do so with a sleek, stylish UI. To do this, I often referred to spacing and arrangement decisions made in other character-focused games, like Overwatch and MiHoYo's Genshin Impact and Honkai: Star Rail.",
      "The character cards in particular went through a number of design iterations. Initially with much sharper corners and font styles, I opted to round things out a little bit while also adding additional subtle detail to the cards, specifically the gradient background fields which have had subtle \"digitization\" and noise effects applied. The screen is still a work in progress, and I hope to add more to the right half of the screen, including unique wordmarks for the characters' names."
    ]
  },
  {
    "image": radialMenu,
    "title": "Sons of Ra Radial Menu",
    "tags": [
      Roles.PROGRAMMING,
      Roles.DESIGN
    ],
    "description": [
      "The Radial Menu in Sons of Ra was an immense design challenge. In a game that often hinged on quick decisions, we wanted players to be able to access any of their possible actions quickly and intuitively, be it with keyboard or controller.",
      "Our game has 3 main action types: unit spawning, tower placement, and active ability usage, with each of these having 4 associated options. We saw this as a natural point on which to base our UI, so we chose to separate the Radial into 3 sections, each with 4 sub-zones. The section the player is engaging with has its options displayed, while those of the other two are obscured to avoid information overload. With this setup, only one action in the game takes more than two button presses to accomplish (and none more than three presses), which allows players to act quickly and decisively."
    ]
  },
  {
    "image": racingGame_hud,
    "title": "Racing Game HUD",
    "tags": [
      Roles.PROGRAMMING,
      Roles.UI_UX
    ],
    "description": [
      "The process of designing the Heads-Up Display mandated that I balance a number of asks with the need to maintain readability. Specifically, two requirements were that character portraits be highly visible, and that it be abundantly clear when a character holds an item. Pushing either of those elements too far would block visbility in a fast-paced, visually busy game, so finding a way to compromise was key.",
      "In doing so, I found a way to address another issue that we were discovering. We had found that opponents were often hard to see on the track, so rather than fix full-size portraits to the side of the viewport, which I found to be a readability concern, I made it so nearby opponents had their portrait and placement hovering above them. This helped to avoid cluttering the HUD, while also keeping our characters in the forefront."
    ]
  },
];

export default data;