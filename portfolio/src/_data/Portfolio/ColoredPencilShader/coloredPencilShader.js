import banner from './banner.webp';

import { Roles } from 'src/components/Util/util';

import unity from '../../../media/unity.png'

export const shaderImplementationData = {
  "banner": {
    "image": banner,
    "label": {
      "en": "Stylized Toon Shader",
      "ja": "Stylized Toon Shader"
    },
    "tagline": 
    {
      "en": "Toon shader made to replicate the feeling of colored pencil art on paper, using Unity Shader Graph",
      "ja": "Toon shader made to replicate the feeling of colored pencil art on paper, using Unity Shader Graph"
    },
  },
  "content": {
    "title": {
      "en": "Sons of Ra",
      "ja": "サンズ・オブ・ラー"
    },
    "roles": [
      Roles.TECH_ART,
    ],
    "summary": {
      "en": "",
      "ja": "",
    },
    "steamEmbed": "",
    "hyperlinks": [
    ],
    "keyVideo": "",
    "involvement": [],
    "accomplishments": [],
    "skills": [
      "Unity Engine",
      "Autodesk Maya"
    ],
    "sections": [
    ]
  },
  "icons": [unity],
  "path": "/Portfolio/ColoredPencilToon"
}

export default shaderImplementationData;