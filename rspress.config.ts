import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Rspress',
  description: 'Rspack-based Static Site Generator',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    // socialLinks: [
    //   { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    // ],
    nav: [
      // {
      //   text: 'Home',
      //   link: '/',
      //   position: 'left',
      // },
      {
        text: '更多链接',
        items: [
          {
            text: 'Github',
            link: 'http://github.com/',
          },
          {
            text: 'Twitter',
            link: 'http://twitter.com/',
          },
          // 也可以是一个导航栏组
          {
            text: 'Group',
            items: [
              {
                text: 'Personal',
                link: 'http://xxx.com/',
              },
              {
                text: 'Company',
                link: 'http://xxx.com/',
              },
            ],
          },
        ],
        position: 'right',
      },
    ],
  },
});

// import { defineConfig } from 'rspress/config';

// export default defineConfig({
//   themeConfig: {
//     nav: [
//       {
//         text: 'Home',
//         link: '/',
//         position: 'left',
//       },
//       {
//         text: '更多链接',
//         items: [
//           {
//             text: 'Github',
//             link: 'http://github.com/',
//           },
//           {
//             text: 'Twitter',
//             link: 'http://twitter.com/',
//           },
//           // 也可以是一个导航栏组
//           {
//             text: 'Group',
//             items: [
//               {
//                 text: 'Personal',
//                 link: 'http://xxx.com/',
//               },
//               {
//                 text: 'Company',
//                 link: 'http://xxx.com/',
//               },
//             ],
//           },
//         ],
//         position: 'right',
//       },
//     ],
//   },
// });