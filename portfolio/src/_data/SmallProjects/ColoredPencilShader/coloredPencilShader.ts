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
  description: {
    "en": "Toon shader made to replicate the feeling of colored pencil art on paper, using Unity Shader Graph",
    "ja": "Toon shader made to replicate the feeling of colored pencil art on paper, using Unity Shader Graph"
  }
}

export default shaderImplementationData;