import banner from './sor_banner.jpg';
import radialMenu from '../../WorkSamples/radialMenu.gif'

import { Roles } from 'src/components/Util/util';

import csharp from '../../../media/csharp.png'
import unity from '../../../media/unity.png'

export const sonsOfRaData = {
  "banner": {
    "image": banner,
    "label": "Sons of Ra",
    "tagline": "Competitive tower defense game that draws on ancient Egyptian mythology"
  },
  "content": {
    "title": "Sons of Ra",
    "roles": [
      Roles.PROGRAMMING,
      Roles.DESIGN
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
    "involvement": [
      "Sons of Ra began as a 6-month class project at Drexel University built around a concept I proposed, after which myself and three of my teammates continued development through to and following graduation. During this time, Sons of Ra won multiple competitions for student-created games, including at E3 2019. Given the small size of our team, I was involved in most all aspects of development, though primarily I served as the lead programmer. Sons of Ra released on Steam in April of 2021.",
    ],
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
  "icons": [unity, csharp],
  "path": "/Portfolio/SonsOfRa"
}

export default sonsOfRaData;