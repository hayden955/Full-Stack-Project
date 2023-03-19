import React from 'react';
import {Icon} from '@ant-design/compatible';
import InfoWindow from 'google-map-react';
// import Icon from 'antd';

const MapMarker = (({ name, key, lat, lng, state }) => {

  const onMarkerClick = (evt) => {
    console.log(name, lat, lng);
    
    <InfoWindow
      visible={true} 
      position={{
        lat: lat,
        lng: lng
      }}
    ></InfoWindow>
  };

  return (
    <div key={key} onClick={onMarkerClick}>
      <span className="brand-red">{name}</span>
      <Icon className="font-1-5" type="environment" theme="twoTone" twotonecolor="#fd0000" />
    </div>
  );
});

export default MapMarker;