/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';

import Banner0 from './Banner0';
import Content0 from './Content0';
import Content1 from './Content1';
import Content3 from './Content3';

import {
  Banner00DataSource,
  Content00DataSource,
  Content10DataSource,
  Content30DataSource,
} from '../data/data.source';
import './less/antMotionStyle.less';

function Home() {
  const children = [
    <Banner0
      id="Banner0_0"
      key="Banner0_0"
      dataSource={Banner00DataSource}
    />,
    <Content0
      id="Content0_0"
      key="Content0_0"
      dataSource={Content00DataSource}
      // isMobile={isMobile}
    />,
    <Content1
      id="Content1_0"
      key="Content1_0"
      dataSource={Content10DataSource}
      // isMobile={isMobile}
    />,
    <Content3
      id="Content3_0"
      key="Content3_0"
      dataSource={Content30DataSource}
      // isMobile={isMobile}
    />,
  ];
  return (
    <div
      className="templates-wrapper"
    >
      {/* 如果不是 dva 2.0 替换成 {children} start */}
      {children}
      {/* 如果不是 dva 2.0 替换成 {children} end */}
    </div>
  );
}

export default Home;
