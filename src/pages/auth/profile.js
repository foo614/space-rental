import React from 'react';
import { PageHeader, Menu, Dropdown, Button, Card, Typography, Row, Col, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, EyeOutlined, UserOutlined, CloseCircleOutlined, CommentOutlined } from '@ant-design/icons';
import '../index.css';
import Review from './profile/review';

const { Paragraph } = Typography;

const { Meta } = Card;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Home
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Profile
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={menu}>
      <Button
        style={{
          border: 'none',
          padding: 0,
        }}
      >
        <EllipsisOutlined
          style={{
            fontSize: 20,
            verticalAlign: 'top',
          }}
        />
      </Button>
    </Dropdown>
  );
};

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const IconLink = ({ src, text }) => (
  <a className="example-link">
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

const content = (
  <>
    <Paragraph>
      Ant Design interprets the color system into two levels: a system-level color system and a
      product-level color system.
    </Paragraph>
    <Paragraph>
      Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
      easier for designers to have a clear psychological expectation of color when adjusting colors,
      as well as facilitate communication in teams.
    </Paragraph>
    <div>
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
        text="Quick Start"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
        text=" Product Info"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        text="Product Doc"
      />
    </div>
  </>
);

const tabList = [
  {
    key: 'tab1',
    tab: 'My Listings',
  },
  {
    key: 'tab2',
    tab: 'My Rentals',
  },
  {
    key: 'tab3',
    tab: 'Reviews',
  },
];

const listings = (
  <Card
    style={{ width: 300 }}
    actions={[
      <EyeOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
    cover={(
      <img
        alt="example"
        src="https://d9lvjui2ux1xa.cloudfront.net/img/defaultListingImageV2.png"
      />
    )}
  >
    <Meta
      avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />}
      title="Parking Lot in Bukit Indah"
      description="RM 219.50 /mo."
    />
  </Card>
);

const rentals = (
  <Card
    style={{ width: 300 }}
    actions={[
      <CommentOutlined key="contact" />,
      <CloseCircleOutlined key="terminate" />,
    ]}
    cover={(
      <img
        alt="example"
        src="https://d9lvjui2ux1xa.cloudfront.net/img/defaultListingImageV2.png"
      />
    )}
  >
    <Meta
      avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />}
      title="Business Storage in Bukit Indah"
      description="rent until 12/12/2020"
    />
  </Card>
);

const contentList = {
  tab1: listings,
  tab2: rentals,
  tab3: <>
    <Review />
    <Review />
    <Review />
        </>,
};

function Profile() {
  const [state, setState] = React.useState({
    key: 'tab1',
    noTitleKey: 'app',
  });
  const onTabChange = (key, type) => {
    setState({ [type]: key });
  };
  return (
    <Row justify="center">
      <Col xs={{ span: 24 }} md={{ span: 12 }} className="p20-md">
        <div className="site-layout-content">
          <PageHeader
            title={localStorage.getItem('username')}
            className="site-page-header"
            // subTitle="This is a subtitle"
            // tags={<Tag color="blue">Running</Tag>}
            // extra={[
            //   <Button key="3">Operation</Button>,
            //   <Button key="2">Operation</Button>,
            //   <Button key="1" type="primary">
            //     Primary
            //   </Button>,
            //   <DropdownMenu key="more" />,
            // ]}
            avatar={{ src: localStorage.getItem('avatar') }}
            // breadcrumb={{ routes }}
          />
          <Card
            style={{ width: '100%' }}
            title="Details"
            tabList={tabList}
            activeTabKey={state.key}
            onTabChange={(key) => {
              onTabChange(key, 'key');
            }}
          >
            {contentList[state.key]}
          </Card>
        </div>
      </Col>
    </Row>

  );
}

export default Profile;
