import banner from './banner.webp';

import { Roles } from 'src/components/Util/util';

import unity from '../../../media/unity.png'
import { ProjectData } from 'src/utils/types';

export const shaderImplementationData: ProjectData = {
  image: banner,
  icons: [unity],
  roles: [
    Roles.TECH_ART
  ],
  label: {
    "en": "Stylized Toon Shader",
    "ja": "Stylized Toon Shader"
  },
  description: [{
      "en": "Toon shader made with Unity Shader Graph to replicate the appearance of colored pencil on paper.",
      "ja": "Toon shader made with Unity Shader Graph to replicate the appearance of colored pencil on paper."
    },
    {
      "en": "Viewport-wide noise patterns, like those around the edges and the flecks across the page, are utilized to give the impression of a drawing on paper. Object outlines add to this feeling, and high frequency subtractive noise is applied to make them appear to have been drawn with a crayon or colored pencil. Lastly, toon shading creates a quaint style, and screen space hatching and a dissolve effect at the shading boundaries are used to complete the stylization reminiscient of hand-drawn pictures.",
      "ja": "Viewport-wide noise patterns, like those around the edges and the flecks across the page, are utilized to give the impression of a drawing on paper. Object outlines add to this feeling, and high frequency subtractive noise is applied to make them appear to have been drawn with a crayon or colored pencil. Lastly, toon shading creates a quaint style, and screen space hatching and a dissolve effect at the shading boundaries are used to complete the stylization reminiscient of hand-drawn pictures."
    }
  ]
}

export default shaderImplementationData;