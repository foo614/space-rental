import React from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
// import MapSearchBox from '../components/SearchBox';
// import PlacesWithStandaloneSearchBox from '../components/SearchBox';
import PropTypes from 'prop-types';
import { Element } from 'rc-scroll-anim';
import { isImg } from '../utils/utils';
import BannerImage from './BannerImage';
// class Banner extends React.PureComponent {
//   render() {
//     const { ...currentProps } = this.props;
//     const { dataSource } = currentProps;
//     delete currentProps.dataSource;
//     delete currentProps.isMobile;
//     return (
//       <div {...currentProps} {...dataSource.wrapper}>
//         <QueueAnim
//           key="QueueAnim"
//           type={['bottom', 'top']}
//           delay={200}
//           {...dataSource.textWrapper}
//         >
//           <video playsInline="playsInline" autoPlay="autoplay" muted="muted" loop="loop">
//             <source src="https://static.pexels.com/lib/videos/free-videos.mp4" type="video/mp4" />
//           </video>
//           <div key="title" {...dataSource.title}>
//             {typeof dataSource.title.children === 'string'
//             && dataSource.title.children.match(isImg) ? (
//               <img src={dataSource.title.children} width="100%" alt="img" />
//               ) : (
//                 dataSource.title.children
//               )}
//           </div>
//           <div key="content" {...dataSource.content}>
//             {dataSource.content.children}
//           </div>
//           <Button href="search" size="large" type="primary" key="button" {...dataSource.button}>
//             {dataSource.button.children}
//           </Button>
//         </QueueAnim>
//         <TweenOne
//           animation={{
//             y: '-=20',
//             yoyo: true,
//             repeat: -1,
//             duration: 1000,
//           }}
//           className="banner0-icon"
//           key="icon"
//         >
//           <DownOutlined />
//         </TweenOne>
//       </div>
//     );
//   }
// }
// export default Banner;
class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: 'banner',
  }

  render() {
    const { className, isMobile, navToShadow } = this.props;
    return (
      <Element component="section" className={`${className}-wrapper page`} onChange={navToShadow}>
        <div className={className}>
          <div className={`${className}-img-wrapper`}>
            {isMobile
              ? <img width="100%" src="https://gw.alipayobjects.com/os/s/prod/antv/assets/image/home/intro-landscape-3a409.svg" alt="" />
              : <BannerImage />}
          </div>
          <QueueAnim
            type={isMobile ? 'bottom' : 'right'}
            className={`${className}-text-wrapper`}
            delay={300}
          >
            <h1 key="h1">Welcome to Space Rental</h1>
            <a target="_blank" href="search" key="a">
              <Button type="primary">
                Explore nearby storage
              </Button>
            </a>
          </QueueAnim>
        </div>
      </Element>
    );
  }
}

export default Banner;
