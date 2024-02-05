import banner from './racingGame_banner.png'
import keyImage from './racingGame_keyImage.png'

import { Projects } from 'src/pages/Portfolio/';

import { Roles } from 'src/components/Util/util';

export const racingGameData = {
  // "project": Projects.RACING_GAME,
  "banner": {
    "image": banner,
    "label": "Unannounced Racing Game",
    "tagline": "Anti-grav racer inspired by F-Zero and Mario Kart"
  },
  "content": {
    "title": "Unannounced Racing Game",
    "roles": [
      Roles.PROGRAMMING,
      Roles.UI_UX,
      Roles.TECH_ART,
      Roles.ANIMATION
    ],
    "summary": "Our currently unannounced anti-grav racer seeks to emulate the adrenaline of F-Zero's lightning-fast gameplay, while also incorporating the accesibility and casual fun of Mario Kart. Gain advantage with the careful use of items and your vehicle's boost gauge, but be careful as your opponents have access to the same dangerous tools. Weave through the skyscrapers of the cities of future America at breakneck speed as you aim to become the greatest racer alive.",
    "hyperlinks": [],
    "keyImage": keyImage,
    "involvement": [
      "For this project, I explored aspects of development that were new to me, and deepened my experience with others. My Master's degree program at the University of Pennsylvania was my first exposure to shader writing, and the visual effects here, like the toon-styled vehicles and abundant holograms, were the perfect chance to put that learning into practice. I also did more in the realm of UI/UX than I ever had in a game before, moving beyond just writing its code to also create the designs, effects, and much of the art myself, excluding the characters.",
      "Furthermore, I've programmed a number of gameplay mechanics and systems, done animations, and used my cross-disciplinary experience to bridge the gap between the tech and art specialists.",
    ],
    "accomplishments": [
      "Designed and developed most in-game UI, including main menu flow and player HUD",
      "Programmed functionality of items & item pickups",
      "Created VFX and post-process shaders for holograms, vehicle cel shading, and outlines",
      "Animated vehicles and in-game actors",
      "Performed varied programming duties and resolved technical defects as they arose"
    ],
    "skills": [],
    "sections": [
      {
        "title": "UI/UX Design & Development",
        "image": "",
        "text": [""],
        "imageLeft": true
      }
    ]
  },
  "path": "/Portfolio/RacingGame"
}

export default racingGameData;