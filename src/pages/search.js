import React, { useState } from 'react';
// import styles from './search.css'; className={styles.title}
import { LoadScript } from '@react-google-maps/api';
// import { useHistory, useParams, useLocation } from 'umi';
import { Row, Col, Card, Typography, Switch, Select, Empty } from 'antd';
import { MoneyCollectOutlined, UserOutlined, BorderlessTableOutlined, MoneyCollectTwoTone, EnvironmentTwoTone, CompassTwoTone } from '@ant-design/icons';
import uuid from 'react-uuid';
import { Link } from 'umi';
import { Locations, Content10DataSource } from '../data/data.source';

import MapContainer from '../components/MapContainer';
import MapSearch from '../components/SearchBox';

const { Option } = Select;
export default function () {
  const [address, setAddress] = useState(null);
  const [isShow, setIsShow] = useState(true);
  // const params = useParams();
  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey="AIzaSyD19zsMorqnVvyvmJuSNtmc3B6QGDWnblc"
      libraries={['places']}
      // onLoad={onLoad}
    >
      <Row justify="space-around" className="mt20-md">
        <Col xs={{ span: 24 }} md={{ span: 6 }} className="mt10-xs">
          <MapSearch address={address} setAddress={setAddress} />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 5 }} className="mt10-xs">
          <Select size="large" mode="tags" style={{ width: '100%' }} tokenSeparators={[',']} placeholder="Storage Type">
            {
              Content10DataSource.content.children.map((item) => {
                return (
                  <Option value={item.label}>{item.label}</Option>
                );
              })
            }
          </Select>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 5 }} className="mt10-xs">
          <Select size="large" mode="tags" style={{ width: '100%' }} tokenSeparators={[',']} placeholder="Size">
            <Option value="small">Small (Less than 10x10)</Option>
            <Option value="medium">Medium (10x10 to 15x15)</Option>
            <Option value="large">Large(15x15 and up)</Option>
          </Select>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 4 }} className="mt10-xs">
          <Select size="large" style={{ width: '100%' }} placeholder="Price">
            <Option value="low">Price (low to high)</Option>
            <Option value="high">Price (high to low)</Option>
          </Select>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 2 }} className="mt10-xs mt20-md">
          <Switch checkedChildren="show map" unCheckedChildren="hide map" onClick={() => setIsShow(!isShow)} defaultChecked />
        </Col>
      </Row>
      <Row className="p10-md">
        <Col>
          {address != null ? (
            <>
              <h2>{address}</h2>
              <small>Find secure self storage units near you</small>
            </>
          ) : null}
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: isShow ? 12 : 24 }} className="p10-md">
          <StorageCardList data={Locations} isShow={isShow} />
        </Col>
        {
          isShow
            ? (
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
                <MapContainer data={Locations} />
              </Col>
            )
            : null
        }
      </Row>
    </LoadScript>
  );
}

function StorageCardList({ data, isShow }) {
  const { Meta } = Card;
  const { Text } = Typography;
  return data != null ? (
    <Row gutter={16}>
      {data.map((item) => {
        return (
          <Col xs={{ span: 12 }} sm={{ span: isShow ? 8 : 4 }} key={uuid()}>
            <Card
              hoverable
              className="mt10-xs"
              cover={
                <img alt="storage" src={item.images[0]} style={{ height: 150 }} />
                }
              actions={[
                <CompassTwoTone key="navigate" />,
                <EnvironmentTwoTone key="map" />,
              ]}
            >
              <Meta title={<Link to={`/storage/${item.id}`}>{item.name}</Link>}
                description={(
                  <>
                    <div>
                      <UserOutlined />
                      {' '}
                      {item.owner}
                    </div>
                    <div>
                      {item.discountRate > 0 ? <MoneyCollectTwoTone /> : <MoneyCollectOutlined /> }
                      {' '}
                      {item.discountRate > 0 ? (item.price * (1 + (item.discountRate / 100))) : item.price}
                      {' '}
                      {item.discountRate > 0 ? <Text delete strong>{item.price}</Text> : null}
                    </div>
                    <div>
                      <BorderlessTableOutlined />
                      {' '}
                      {item.size}
                    </div>
                  </>
                  )}
              />
            </Card>
          </Col>
        );
      })}
    </Row>
  ) : <Empty />;
}
