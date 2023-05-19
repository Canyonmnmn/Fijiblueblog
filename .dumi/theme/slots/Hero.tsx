import { DumiSiteProvider, Hero } from 'dumi-theme-antd-style';
import { Center } from 'react-layout-kit';

export default () => (
  <DumiSiteProvider>
    <Center style={{ height: 600 }}>
      <Hero
        title={"FijiBlue's <b>blog</b>"}
        actions={[
          { text: '开始阅读', link: '/guide' },
          { text: 'Github', link: '/' },
        ]}
        description={'记录学习/享受编码'}
      />
    </Center>
  </DumiSiteProvider>
);