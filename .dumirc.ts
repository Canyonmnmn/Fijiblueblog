import { defineConfig } from 'dumi';

const repo = 'Fijiblueblog'
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  favicons:['/avater.svg'],
  themeConfig: {
    name: 'FijiBlue - 个人博客',
    logo: '/avater.svg',
    socialLinks:{
      github:"https://github.com/Canyonmnmn"
    },
    hideHomeNav:false
  },
});
