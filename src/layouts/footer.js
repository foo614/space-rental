import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Col, Row } from 'antd';
import uuid from 'react-uuid';

class Footer extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div {...props} {...dataSource.wrapper}>
        <OverPack {...dataSource.OverPack}>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            key="footer"
            {...dataSource.copyright}
          >
            <Row>
              {dataSource.footerMenu.map((foot) => (
                <Col
                  key={uuid()}
                  md={{ span: 6 }}
                  xs={{ span: 24 }}
                  className="footer-item-col"
                >
                  <div className="footer-item">
                    <h2>
                      {foot.icon && (
                      <img
                        style={{ marginRight: 16 }}
                        src={foot.icon}
                        alt="img"
                      />
                      )}
                      {foot.title}
                    </h2>
                    {foot.children.map((child) => (
                      <div key={uuid()}>
                        <a target="_blank " href={child.link}>
                          {child.title}
                          {child.desc && (
                          <span style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                            {' '}
                            -
                            {' '}
                            {child.desc}
                          </span>
                          )}
                        </a>
                      </div>
                    ))}
                  </div>
                </Col>
              ))}
            </Row>
            <div className="footer-bottom">
              <div className="page">
                <Row>
                  <Col md={{ span: 14 }} xs={{ span: 24 }}>
                    <span style={{ marginRight: 0 }}>
                      {dataSource.copyright.children}
                    </span>
                  </Col>
                </Row>
              </div>
            </div>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Footer;
