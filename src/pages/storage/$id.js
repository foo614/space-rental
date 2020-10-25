import React, { useState, useEffect } from 'react';
import { useParams } from 'umi';
import { Carousel, Row, Col, Empty, Statistic, Card, Button, Typography, Divider, Tooltip, Space, Avatar, Timeline } from 'antd';
import { PhoneOutlined, ClockCircleOutlined, BorderlessTableOutlined, HomeOutlined, CalendarOutlined } from '@ant-design/icons';
import moment from 'moment';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import uuid from 'react-uuid';
import { Locations } from '../../data/data.source';

const { Meta } = Card;
const { Text } = Typography;
function StorageDetails() {
  const params = useParams();
  const [map, setMap] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const contentStyle = {
    height: '380px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const containerStyle = {
    width: '100%',
    height: '350px',
  };
  const center = {
    lat: 1.482337,
    lng: 103.644515,
  };
  useEffect(() => {
    const id = parseInt(params.id, 0);
    setSelectedStorage(Locations.find((x) => x.id === id));
  }, []);
  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  return selectedStorage ? (
    <>
      <Row justify="center">
        <Col xs={{ span: 24 }} md={{ span: 6, offset: 6 }} className="p20-md">
          <Carousel dotPosition="bottom">
            {selectedStorage?.images.map((item) => {
              return (
                <div key={uuid()}>
                  <img style={contentStyle} src={item} alt="storage" />
                </div>
              );
            })}
          </Carousel>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} className="p20-md">
          <Card>
            <Meta
              title={(
                <h2>
                  RM
                  {' '}
                  {selectedStorage.price}
                  {' '}
                  <sup><small>1st month</small></sup>
                </h2>
                )}
              description={(
                <>
                  <Statistic title="Service Fee" value="RM 10.50" precision={2} />
                  <Statistic style={{ marginTop: 8 }} title="Subtotal" value={580.80} precision={2} />
                  <Statistic style={{ marginTop: 8 }} title="Total" value={603.2} precision={2} />
                  <Button style={{ marginTop: 16 }} type="primary">
                    CONTINUE
                  </Button>
                  <br />
                  <Text type="secondary" style={{ marginTop: 16 }}><small>*Discount only available for reservations longer than one month.</small></Text>
                </>
                )}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 6, offset: 6 }} className="pl20-xs">
          <h1 className="mb20-xs">{selectedStorage.name}</h1>
          <Timeline>
            <Timeline.Item dot={<CalendarOutlined style={{ fontSize: '16px' }} />} color="red">
              Created on:
              {' '}
              {moment(selectedStorage.insertedTime).utc().format('YYYY-MM-DD')}
            </Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
              Access Time:
              {' '}
              {selectedStorage.accessTime}
            </Timeline.Item>
            <Timeline.Item dot={<HomeOutlined style={{ fontSize: '16px' }} />} color="red">
              Storage Type:
              {' '}
              {selectedStorage.storageType.map((item) => {
                return item;
              })}
            </Timeline.Item>
            <Timeline.Item style={{ paddingBottom: '0!important' }} dot={<BorderlessTableOutlined style={{ fontSize: '16px' }} />}>
              Size:
              {' '}
              {selectedStorage.size}
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 11, offset: 6 }} className="pl20-md">
          <Divider orientation="left">Location</Divider>
          <LoadScript
            id="script-loader"
            googleMapsApiKey="AIzaSyD19zsMorqnVvyvmJuSNtmc3B6QGDWnblc"
            libraries={['places']}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
            />
          </LoadScript>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 11, offset: 6 }} className="pl20-md">
          <Divider orientation="left">Features</Divider>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 11, offset: 6 }} className="pl20-md p10-xs">
          <div>
            <Tooltip placement="topLeft" title="The space has smoke detectors to protect against fire damage." arrowPointAtCenter>
              <Button style={{ margin: '0 8px 8px 0' }}>Smoke Detectors</Button>
            </Tooltip>
            <Tooltip placement="topLeft" title="The space is only accessible with a key/access code." arrowPointAtCenter>
              <Button style={{ margin: '0 8px 8px 0' }}>Locked Area</Button>
            </Tooltip>
            <Tooltip placement="topLeft" title="The space is free from all pets/animals." arrowPointAtCenter>
              <Button style={{ margin: '0 8px 8px 0' }}>Pet Free</Button>
            </Tooltip>
            <Tooltip placement="topLeft" title="The space has not and will not be exposed to cigarette smoke." arrowPointAtCenter>
              <Button>Smoke Free</Button>
            </Tooltip>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 11, offset: 6 }} className="pl20-md">
          <Divider orientation="left">The Host</Divider>
          <div className="pl20-xs p0-md">
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            <h3>{selectedStorage.owner}</h3>
            <Button style={{ marginTop: 16, marginBottom: 16 }} type="primary" icon={<PhoneOutlined />} size="large">
              Contact Host
            </Button>
          </div>
        </Col>
      </Row>
    </>
  ) : (
    <Empty />
  );
}

export default StorageDetails;
