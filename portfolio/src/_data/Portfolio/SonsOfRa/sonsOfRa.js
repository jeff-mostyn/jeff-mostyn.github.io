import banner from './sor_banner.jpg';
import radialMenu from './radialMenu.gif'

import { Projects } from 'src/pages/Portfolio/';

export const sonsOfRaData = {
  // "project": Projects.SONS_OF_RA,
  "banner": {
    "image": banner,
    "label": "Sons of Ra",
    "tagline": "Competitive tower defense game that draws on ancient Egyptian mythology"
  },
  "content": {
    "title": "Sons of Ra",
    "roles": [
      "Programming",
      "Design"
    ],
    "summary": "Sons of Ra is an award winning two-player competitive tower defense game where players take control of opposing pharaohs in Egypt. Send your armies and build up defenses in a fast-paced strategy game designed for competition between two local or online players. Choose a patron deity and unleash mighty abilities to turn the tide of battle, or expand your kingdom to gain a strategic edge.",
    "hyperlinks": [
      {
        "text": "Steam Store Page",
        "url": "https://store.steampowered.com/app/1134020/Sons_of_Ra/"
      },
      {
        "text": "First Prize - E3 2019 College Game Competition",
        "url": "https://6abc.com/e3-2019-college-game-competition-video-awards/5346550/"
      },
      {
        "text": "FTW Philly TV Spot",
        "url": "https://youtu.be/0B0YYqkLePk?si=LbNTnWJLRq61mk_B&t=880"
      },
      {
        "text": "Drexel University 40 Under 40",
        "url": "https://drexelmagazine.org/2020/code-like-an-egyptian/"
      }
    ],
    "keyVideo": "3aAvEn6kEM4?si=BDdoSWe8pDN1VFuj",
    "accomplishments": [
      "Led development of gameplay systems and mechanics",
      "Implemented Radial UI that is friendly for both controller and keyboard & mouse users",
      "Programmed Peer-to-Peer Networked Multiplayer with Facepunch.Steamworks",
      "Designed and developed Unit Behavior Architecture, which dictates the actions of 7 unit types",
      "Coded Menu UI systems and implemented UX requirements",
    ],
    "skills": [
      "Unity Engine",
      "C#",
      "Visual Studio",
      "Git",
      "Autodesk Maya"
    ],
    "sections": [
      {
        "title": "Radial UI",
        "image": radialMenu,
        "text": [
          "As a lifelong console player, a goal of mine from the start was to make Sons of Ra playable on controller. After working together with Jo and Mark, our designer and artist, to settle on a concept and put together some temporary assets, I hashed out a prototype over the course of a couple of days. The primary goal I adopted was to present as much information as possible while not overloading the player.  \r\n\r\nFollowing playtests of the initial version, we were extremely happy with how it performed, to the extent that aside from replacing the temp art with cleaner UI elements and adding some minor features like unlockable abilities, the final result ultimately differed little from that initial prototype."
        ],
        "imageLeft": false
      },
      {
        "title": "Peer-to-Peer Multiplayer",
        "image": "",
        "text": [""],
        "imageLeft": true
      },
    ]
  },
  "path": "/Portfolio/SonsOfRa"
}

export default sonsOfRaData;