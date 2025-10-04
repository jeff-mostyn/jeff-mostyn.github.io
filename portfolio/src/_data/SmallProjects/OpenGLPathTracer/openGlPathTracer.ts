import banner from './CornellBox.png';

import { Roles } from 'src/components/Util/util';

import qt from '../../../media/qt.png'
import opengl from '../../../media/opengl.jpg'
import { ProjectData } from 'src/utils/types';

export const openGlPathTracerData: ProjectData = {
  image: banner,
  icons: [qt, opengl],
  roles: [
    Roles.PROGRAMMING,
    Roles.TECH_ART
  ],
  label: {
    "en": "OpenGL Path Trace Renderer",
    "ja": "OpenGL Path Trace Renderer"
  },
  description: [{
      "en": "Monte Carlo path trace renderer built using OpenGL",
      "ja": "Monte Carlo path trace renderer built using OpenGL"
    },
    {
      "en": "The renderer is capable of rendering complex scenes with multiple objects and varied materials, flat and reflective",
      "ja": "The renderer is capable of rendering complex scenes with multiple objects and varied materials, flat and reflective"
    }
  ]
}

export default openGlPathTracerData;