import { defineConfig } from 'dumi';

const repo = 'Fijiblueblog'
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  themeConfig: {
    name: 'FijiBlue',
    logo: '/avater.svg',
    socialLinks:{
      github:"https://github.com/Canyonmnmn"
    },
    hideHomeNav:false
  },
});
