import React, { useState, useEffect } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { MdDoubleArrow } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export default function GeoLocation() {
    const [center, setCenter] = useState({
      lat: 33.450701,
      lng: 126.570667
    });
    const [click, setClick] = useState(false);
    const [address, setAddress] = useState('');

    const clickBtn = () => {
      setClick(true);
      console.log(center.lat, center.lng, address, click);
    };

    useEffect(() => {
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCenter({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          }
        ) 
        
        var geocoder = new window.kakao.maps.services.Geocoder();

        var coord = new window.kakao.maps.LatLng(center.lat, center.lng);
        var callback = (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                setAddress(result[0].address.address_name);
            }
        };

        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);

      }
    }, [center]);
    
    return (
      <div>
        <LocationWrap>
          <Button 
            variant="light" 
            className="location-btn"
            onClick={clickBtn}
          >
            내 위치 확인하기
            <FaLocationArrow />
          </Button>
          <MdDoubleArrow className="location-arrow" />
          <FormWrap>
            {click ? (
              <div className="location-text">{address}</div>
            ):(
              <div className="location-text"></div>
            )}
          </FormWrap>
        </LocationWrap>
        
          
      </div>
    );
}

const LocationWrap = styled.div`
  height: 65px;
  margin-top : 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .location-btn {
    height: 100%;
    width: 25%;
    font-size: 23px;
    border-radius: 25px;
    border: 4px solid rgb(200, 200, 200);
  }

  & .location-arrow {
    font-size: 30px;
  }
`;

const FormWrap = styled.div`
  width: 70%;
  padding: 0;
  margin-bottom: 0;
  height: 100%;
  background-color: white;

  & .location-text {
    padding: 15px 0;
    font-size: 23px;
  }
`;