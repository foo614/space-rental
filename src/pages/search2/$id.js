import React, { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import { useHistory, useParams, useLocation } from 'umi';
import { Row, Col, Card, Typography } from 'antd';
import { MoneyCollectOutlined, UserOutlined, BorderlessTableOutlined, MoneyCollectTwoTone, EnvironmentTwoTone, CompassTwoTone } from '@ant-design/icons';
import { Locations } from '../../data/data.source';

import MapContainer from '../../components/MapContainer';

export default function () {
  const [address, setAddress] = useState(null);
  const params = useParams();
  const location = params.search.split(',');
  const latlng = { lat: parseFloat(location[0]), lng: parseFloat(location[1]) };
  function getReverseGeocode(reverseGeocoding) {
    if (reverseGeocoding !== 'undefined') {
      reverseGeocoding.geocode({ location: latlng }, (results, status) => {
        console.log(status, results);
        setAddress(results[0]);
      });
    }
  }

  const onLoad = React.useCallback((map) => {
    console.log(map, 'map');
    const reverseGeocoding = new window.google.maps.Geocoder();
    getReverseGeocode(reverseGeocoding);
  }, []);

  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey="AIzaSyD19zsMorqnVvyvmJuSNtmc3B6QGDWnblc"
      libraries={['places']}
      onLoad={onLoad}
    >
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="p10-xs">
          {address != null ? (
            <h2>{address.plus_code.compound_code.substring(8)}</h2>
          ) : null}
          <small>Find secure self storage units near you</small>
          <StorageCardList data={Locations} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mt10-xs">
          <MapContainer latlng={latlng} data={Locations} />
        </Col>
      </Row>
    </LoadScript>
  );
}

function StorageCardList({ data }) {
  const { Meta } = Card;
  const { Text } = Typography;
  return data != null ? (
    <div className="p10-xs">
      <Row gutter={16}>
        {data.map((item) => {
          return (
            <Col xs={12} sm={8}>
              <Card
                hoverable
                className="mt10-xs"
                // style={{
                //   width: 240,
                // }}
                cover={
                  <img alt="storage" src={item.image} style={{ height: 150 }} />
                }
                actions={[
                  <CompassTwoTone key="navigate" />,
                  <EnvironmentTwoTone key="map" />,
                ]}
              >
                <Meta title={item.name}
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
    </div>
  ) : null;
}
