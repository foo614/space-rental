import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Button, Card, message } from 'antd';
import { SendOutlined, PushpinOutlined } from '@ant-design/icons';
import uuid from 'react-uuid';

const { Meta } = Card;
const MapContainer = ({ isAdding, getLocation, data }) => {
  const locations = data;
  const [selected, setSelected] = useState({});
  const [currentPosition, setCurrentPosition] = useState({});

  const markerRef = useRef(null);

  const defaultCenter = {
    lat: locations[0].location.lat, lng: locations[0].location.lng,
  };

  const onSelect = (item) => {
    setSelected(item);
  };

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPosition = {
      lat: latitude,
      lng: longitude,
    };
    setCurrentPosition(currentPosition);
  };

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng });
  };

  const favourite = () => {
    message.info('Save to favourite');
  };

  const footer = (
    <div className="footer">
      <div className="inner-footer">
        <span className="location-text">Choose location and press</span>
        <Button variant="contained" color="primary" onClick={() => getLocation(currentPosition)}>
          Next
        </Button>
      </div>
    </div>
  );

  const mapStyles = () => {
    if (!isAdding) {
      return {
        height: '100vh',
        width: '100%',
      };
    }
    return {
      height: '80vh',
      width: '100%',
    };
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  return (
    <>
      <GoogleMap
        id="example-map"
        mapContainerStyle={mapStyles()}
        draggable
        zoom={13}
        center={currentPosition.lat ? currentPosition : defaultCenter}
      >
        {
            locations
              ? locations.map((item) => {
                return (
                  <Marker
                    key={uuid()}
                    position={item.location}
                    onClick={() => onSelect(item)}
                  />
                );
              }) : null
          }
        {/* {
            currentPosition.lat
              ? (
                <Marker
                  position={currentPosition}
                  ref={() => markerRef}
                  onDragEnd={(e) => onMarkerDragEnd(e)}
                  draggable
                />
              )
              : null
          } */}
        {
            selected.location
              ? (
                <InfoWindow
                  mapContainerStyle={{ width: '300px', margin: '0 0 20px 20px', height: '90px' }}
                  draggable={false}
                  position={selected.location}
                  onCloseClick={() => setSelected({})}
                >
                  <Card
                    className="small-image"
                    cover={<img alt="rental" src={selected.images[0]} />}
                    actions={[
                      <PushpinOutlined key="favourite" onClick={favourite} />,
                      <a target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${selected.location.lat},${selected.location.lng}`} alt="direction"><SendOutlined key="route" /></a>,
                    ]}
                  >
                    <Meta title={selected.name} description={`${`RM${selected.price}`}.${selected.size}`} />
                  </Card>
                </InfoWindow>
              ) : null
          }
      </GoogleMap>
      {
        footer
      }
    </>
  );
};
export default MapContainer;
