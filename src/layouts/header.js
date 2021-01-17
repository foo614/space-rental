import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { Link } from 'umi';
import {
  AppstoreOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { getChildrenToRender } from '../utils/utils';

const { Item, SubMenu } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const { phoneOpen } = this.state;
    const navData = dataSource.Menu.children;
    const navChildren = navData.map((item, key) => {
      const { children: a, subItem, isAuth, ...itemProps } = item;
      if (subItem && isAuth.toString() === localStorage.getItem('isAuth')) {
        return (
          <SubMenu
            key={item.name}
            {...itemProps}
            title={(
              <div
                {...a}
                className={`header0-item-block ${a.className}`.trim()}
              >
                {a.children.map(getChildrenToRender)}
              </div>
            )}
            popupClassName="header0-item-child"
          >
            {subItem.map(($item, ii) => {
              const { children: childItem } = $item;
              const child = childItem.href ? (
                <a {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </a>
              ) : (
                <div {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </div>
              );
              return (
                <Item key={$item.name || ii.toString()} {...$item}>
                  {child}
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      const checkAuth = localStorage.getItem('isAuth') === 'null' ? 'false' : 'true';
      if ((key === 3 || key === 4) && isAuth.toString() === checkAuth) return;
      return (
        <Item key={item.name} {...itemProps}>
          <a {...a} className={`header0-item-block ${a.className}`.trim()}>
            {a.children.map(getChildrenToRender)}
          </a>
        </Item>
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <Link to="/">
            <TweenOne
              animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
              {...dataSource.logo}
            >
              {dataSource.logo.children}
              {/* <img width="100%" src={dataSource.logo.children} alt="img" /> */}
            </TweenOne>
          </Link>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...dataSource.Menu}
            animation={
              isMobile
                ? {
                  height: 0,
                  duration: 300,
                  onComplete: (e) => {
                    if (this.state.phoneOpen) {
                      e.target.style.height = 'auto';
                    }
                  },
                  ease: 'easeInOutQuad',
                }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={['sub0']}
              theme="dark"
            >
              <Menu.Item key="home">
                <Link to="/">Home</Link>
              </Menu.Item>
              {localStorage.getItem('isAuth') !== 'true' ? (
                <Menu.Item key="login">
                  <Link to="/login">Login</Link>
                </Menu.Item>
              ) : null }
              {localStorage.getItem('isAuth') === 'true' ? (
                <SubMenu
                  key="SubMenu"
                  title={`Hi, ${localStorage.getItem('username')}`}
                >
                  <Menu.Item key="setting:1"><Link to="/profile">Profile</Link></Menu.Item>
                  <Menu.Item key="setting:2"><Link to="/logout">Logout</Link></Menu.Item>
                </SubMenu>
              ) : null}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header;
