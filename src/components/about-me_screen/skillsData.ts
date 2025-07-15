// Skill images and categories for the About Me skills section

import webHtml from '../../assets/skills/web/html.png';
import webCss from '../../assets/skills/web/css.png';
import toolsPostman from '../../assets/skills/tools/postman.png';
import toolsJitsi from '../../assets/skills/tools/jitsi_meet.png';
import toolsGithub from '../../assets/skills/tools/github.png';
import toolsGit from '../../assets/skills/tools/git.png';
import toolsLinux from '../../assets/skills/tools/linux.png';
import dbFirestore from '../../assets/skills/database/firestore.png';
import dbSql from '../../assets/skills/database/sql.png';
import dbMongo from '../../assets/skills/database/mongo.png';
import dbFirebase from '../../assets/skills/database/firebase.png';
import fwSocket from '../../assets/skills/frameworks/socket.png';
import fwExpress from '../../assets/skills/frameworks/express.png';
import fwVite from '../../assets/skills/frameworks/vite.png';
import fwReact from '../../assets/skills/frameworks/react.png';
import fwFlask from '../../assets/skills/frameworks/flask.png';
import fwFlutter from '../../assets/skills/frameworks/flutter.png';
import langJs from '../../assets/skills/languages/js.png';
import langDart from '../../assets/skills/languages/dart.png';
import langPython from '../../assets/skills/languages/python.png';
import langCpp from '../../assets/skills/languages/c++.png';
import langC from '../../assets/skills/languages/c.png';

export const skillCategories = [
  {
    name: 'Languages',
    images: [
      { src: langC, alt: 'C' },
      { src: langCpp, alt: 'C++' },
      { src: langPython, alt: 'Python' },
      { src: langJs, alt: 'JavaScript' },
      { src: langDart, alt: 'Dart' },
    ],
  },
  {
    name: 'Frameworks',
    images: [
      { src: fwReact, alt: 'React' },
      { src: fwFlutter, alt: 'Flutter' },
      { src: fwExpress, alt: 'Express' },
      { src: fwFlask, alt: 'Flask' },
      { src: fwSocket, alt: 'Socket.io' },
      { src: fwVite, alt: 'Vite' },
    ],
  },
  {
    name: 'Web',
    images: [
      { src: webHtml, alt: 'HTML' },
      { src: webCss, alt: 'CSS' },
    ],
  },
  {
    name: 'Database',
    images: [
      { src: dbFirebase, alt: 'Firebase' },
      { src: dbFirestore, alt: 'Firestore' },
      { src: dbMongo, alt: 'MongoDB' },
      { src: dbSql, alt: 'SQL' },
    ],
  },
  {
    name: 'Tools',
    images: [
      { src: toolsGit, alt: 'Git' },
      { src: toolsGithub, alt: 'GitHub' },
      { src: toolsLinux, alt: 'Linux' },
      { src: toolsPostman, alt: 'Postman' },
      { src: toolsJitsi, alt: 'Jitsi Meet' },
    ],
  },
]; 