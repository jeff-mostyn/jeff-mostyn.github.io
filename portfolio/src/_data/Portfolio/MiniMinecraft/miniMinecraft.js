import banner from './miniMinecraft_banner.webp'

import cpp from '../../../media/cpp.png'
import qt from '../../../media/qt.png'
import opengl from '../../../media/opengl.jpg'

export const racingGameData = {
  "banner": {
    "image": banner,
    "label": {
      "en": "Mini Minecraft",
      "ja": "ミニMinecraft"
    },
    "tagline": "University of Pennsylvania CIS 5600 Introduction to Computer Graphics Final Project"
  },
  "content": {
    "title": "Mini Minecraft",
    "roles": [
      "Programming",
      "Tech Art",
    ],
    "summary": "Mini Minecraft is the final project for CIS 5600 - Introduction to Computer Graphics at the University of Pennsylvania. As a group, our task was to create a very basic version of Minecraft from scratch using OpenGL, the same way as Notch did originally. Some of the baseline requirements included terrain generation, chunking and rendering of terrain with OpenGL, and implementing player physics and interactions, among others. In addition to this, we were tasked with adding some  original features of our own.",
    "hyperlinks": [],
    "keyVideo": "VvQwWRIcAGM?si=9gZ1dwFEEcZ3q69o",
    "involvement": [
      "My personal favorite contribution, and a goal I had from the start with this project was the above mentioned \"mirror dimension\". This came from a desire to recreate a mechanic from another game, and what I chose to attempt was the time-traveling mechanic from the Dishonored 2 mission, \"A Crack in the Slab\". Though the two versions of the world here do not communicate or share state with each other, they are equally independently interactable, and the abilities to swap worlds and see the opposite world through a portion of the screen remain."
    ],
    "accomplishments": [
      "Rendered generated terrain data, using C++ and OpenGL for rasterization",
      "Optimized rendering by grouping individual blocks into chunks for batch processing, and de-rendering based on player proximity",
      "Used multithreaded execution to further improve render efficiency",
      "Implemented the \"mirror dimension\" and the ability of the player to swap between worlds"
    ],
    "skills": [],
    "sections": []
  },
  "icons": [qt, cpp, opengl],
  "path": "/Portfolio/RacingGame"
}

export default racingGameData;