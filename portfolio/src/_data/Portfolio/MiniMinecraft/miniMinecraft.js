import banner from './miniMinecraft_banner.png'

import cpp from '../../../media/cpp.png'

export const racingGameData = {
  "banner": {
    "image": banner,
    "label": "Mini Minecraft",
    "tagline": "University of Pennsylvania CIS 5600 Introduction to Computer Graphics Final Project"
  },
  "content": {
    "title": "Mini Minecraft",
    "roles": [
      "Programming",
      "Tech Art",
    ],
    "summary": "Mini Minecraft is the final project for CIS 5600 - Introduction to Computer Graphics at the University of Pennsylvania. As a group, our task was to create a very basic version of Minecraft from scratch, with requirements including terrain generation, rendering of terrain with OpenGL, and implementing player physics and interactions, among others. In addition to this, we were tasked with adding some  original features of our own.",
    "hyperlinks": [],
    "keyVideo": "VvQwWRIcAGM?si=9gZ1dwFEEcZ3q69o",
    "involvement": [
      ],
    "accomplishments": [
      "Rendered generated terrain data, using C++ and OpenGL for rasterization",
      "Optimized rendering by grouping individual blocks into chunks for batch processing, and de-rendering based on player proximity",
      "Used multithreaded execution to further improve render efficiency",
      "Implemented the \"mirror dimension\" and the ability of the player to swap between worlds"
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
  "icons": [cpp],
  "path": "/Portfolio/RacingGame"
}

export default racingGameData;