import React, { useState } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import { SmileOutlined } from '@ant-design/icons';
import { Row, Col, Input, notification } from 'antd';
import { history } from 'umi';

const { Search } = Input;
const MapSearch = ({ address, setAddress }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [value, setValue] = useState('');
  const onLoad = (places) => {
    setAutocomplete(places);
  };
  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const places = autocomplete.getPlace();
      notification.open({
        message: 'Google Map Alert',
        description:
          `Location you searched ${places.geometry.location.lat()} ${places.geometry.location.lng()}`,
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      });
      setValue(places.name);
      setAddress(places.name);
      setAutocomplete(places);
      // history.push(`/search/${places.geometry.location.lat()},${places.geometry.location.lng()}`);
    } else {
      notification.open({
        message: 'Google Map Alert',
        description: 'Autocomplete is not loaded yet!',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      });
    }
  };
  return (
  // <Row>
  //   <Col span={12} offset={6}>
    <Autocomplete
      onLoad={onLoad}
      onPlaceChanged={onPlaceChanged}
      restrictions={{ country: ['my', 'sg'] }}
    >
      <Search
        type="text"
        size="large"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search storage..."
      />
    </Autocomplete>
  //   </Col>
  // </Row>
  );
};
export default MapSearch;
