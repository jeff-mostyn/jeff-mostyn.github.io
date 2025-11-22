import { Roles } from 'src/components/Util/util'

import banner from './miniMinecraft_banner.webp'
import qt from '../../../media/qt.png'
import cplusplus from '../../../media/cpp.png'
import opengl from '../../../media/opengl.jpg'
import { containerTypes, PortfolioItemData, visualizationTypes } from 'src/utils/portfolioSegmentTypes'

export const miniMinecraftData: PortfolioItemData = {
  banner: {
    image: banner,
    label: {
      "en": "Mini Minecraft",
      "ja": "ミニMinecraft"
    },
    tagline: {
       "en": "University of Pennsylvania CIS 5600 Introduction to Computer Graphics Final Project",
      "ja": "ペン大学CIS5600授業のファイナル・プロジェクト"
    },
  },
  content: {
    title: {
      "en": "Mini Minecraft",
      "ja": "ミニMinecraft"
    },
    roles: [
      Roles.PROGRAMMING,
      Roles.TECH_ART
    ],
    summary: {
      "en": "Mini Minecraft is the final project for CIS 5600 - Introduction to Computer Graphics at the University of Pennsylvania. As a group, our task was to create a very basic version of Minecraft from scratch using OpenGL, the same way as Notch did originally. Some of the baseline requirements included terrain generation, chunking and rendering of terrain with OpenGL, and implementing player physics and interactions, among others. In addition to this, we were tasked with adding some original features of our own.",
      "ja": "ミニMinecraftはペン大学CIS5600 - Introduction to Computer Graphics授業のファイナル・プロジェクトです。私たちの目的は、グループで基本から凄く簡単なMinecraftのバージョンを本来クリエーターのNotchのように、OpenGLで作ることでした。最小要件は、地面ジェネレーションとか、地面を「チャンク」してOpenGLでレンダーするを含む。その上に自分で決めたフィーチャーをプログラムする事も要求された",
    },
    containers: [
      {
        name: containerTypes.SIDE_BY_SIDE,
        children: [
          {
            name: visualizationTypes.YOUTUBE,
            id: "VvQwWRIcAGM?si=9gZ1dwFEEcZ3q69o",
          },
          {
            name: visualizationTypes.LIST_AND_SUMMARY,
            list: [
              {
                "en": "Rendered generated terrain data, using C++ and OpenGL for rasterization",
                "ja": "Rendered generated terrain data, using C++ and OpenGL for rasterization"
              },
              {
                "en": "Optimized rendering by grouping individual blocks into chunks for batch processing, and de-rendering based on player proximity",
                "ja": "Optimized rendering by grouping individual blocks into chunks for batch processing, and de-rendering based on player proximity"
              },
              {
                "en": "Used multithreaded execution to further improve render efficiency",
                "ja": "Used multithreaded execution to further improve render efficiency"
              },
              {
                "en": "Implemented the \"mirror dimension\" and the ability of the player to swap between worlds",
                "ja": "Implemented the \"mirror dimension\" and the ability of the player to swap between worlds"
              }
            ],
            reverse: false,
            summary: [
              {
                "en": "My personal favorite contribution, and a goal I had from the start with this project was the above mentioned \"mirror dimension\". This came from a desire to recreate a mechanic from another game, and what I chose to attempt was the time-traveling mechanic from the Dishonored 2 mission, \"A Crack in the Slab\". Though the two versions of the world here do not communicate or share state with each other, they are equally independently interactable, and the abilities to swap worlds and see the opposite world through a portion of the screen remain.",
                "ja": "My personal favorite contribution, and a goal I had from the start with this project was the above mentioned \"mirror dimension\". This came from a desire to recreate a mechanic from another game, and what I chose to attempt was the time-traveling mechanic from the Dishonored 2 mission, \"A Crack in the Slab\". Though the two versions of the world here do not communicate or share state with each other, they are equally independently interactable, and the abilities to swap worlds and see the opposite world through a portion of the screen remain."
              },
            ]
          }
        ],
        reverse: false
      }
    ]
  },
  icons: [qt, cplusplus, opengl ],
  path: "comcast_web_frontend"
}

export default miniMinecraftData;