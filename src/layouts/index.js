/* eslint-disable react/no-unused-state */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import { Layout } from 'antd';
import Header from './header';
import Footer from './footer';
import {
  Nav00DataSource,
  Footer01DataSource,
} from '../data/data.source';

const { Content } = Layout;
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
const { location } = window;
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    return (
      <div
        className="templates-wrapper"
      >
        <Header
          id="Nav0_0"
          key="Nav0_0"
          dataSource={Nav00DataSource}
          isMobile={this.state.isMobile}
        />
        <Content>
          {this.props.children}
        </Content>
        <Footer
          id="Footer0_1"
          key="Footer0_1"
          dataSource={Footer01DataSource}
          isMobile={this.state.isMobile}
        />
      </div>
    );
  }
}
