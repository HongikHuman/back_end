import React, {useState, useEffect, Component} from 'react';
import { Map, MapMarker, MapInfoWindow } from 'react-kakao-maps-sdk';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';


export default function KakaoMap(props){
    //props.univ.name => 목표 대학교 한글 이름
    //props.univ.title => 대학교 영문
    //props.univ.address => 지도 중심으로 설정할 도로명 주소
    //props.univ.lng
    //props.univ.lat

    //props.restaurant => 식당 좌표 배열
    //props.restaurant[idx].title => 식당 이름
    //props.restaurant[idx].xcoord => 경도
    //props.restaurant[idx].ycoord => 위도
    const [info, setInfo] = useState();
    const [markers, setMarkers] = useState([]);
    const [map, setMap] = useState();
    const history = useHistory();
  
    const [centerPos, setCenterPos] = useState({x: !props.univ.lng?126.9786567:props.univ.lng, y: !props.univ.lat?37.566826:props.univ.lat});
    
    useEffect(()=>{
      setCenterPos({x: !props.univ.lng?126.9786567:props.univ.lng, y: !props.univ.lat?37.566826:props.univ.lat});
      console.log(props.univ);
    }, [props.univ])

    useEffect(()=>{
      if (!map) return
      const bounds = new window.kakao.maps.LatLngBounds();
      bounds.extend(new window.kakao.maps.LatLng(centerPos.y, centerPos.x));
      let markers = [{
        position: {
          lat: centerPos.y,
          lng: centerPos.x,
        },
        content: props.univ.name,
      }];
      
      props.restaurants.forEach((elem)=>{
        bounds.extend(new window.kakao.maps.LatLng(elem.y, elem.x));
        markers.push({
          position: {
            lat: elem.y,
            lng: elem.x
          },
          content: elem.title,
          linkTo: elem.index,
        });        
      })
      setMarkers(markers);
      map.setBounds(bounds);
    }, [props.restaurants, centerPos])

    

    useEffect(() => {
      if (!map) return
      const bounds = new window.kakao.maps.LatLngBounds()
      //타겟 대학교 지도에 표시
      bounds.extend(new window.kakao.maps.LatLng(centerPos.y, centerPos.x));
      setMarkers([{
        position: {
          lat: centerPos.y,
          lng: centerPos.x,
        },
        content: props.univ.name,
      }]);
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    }, [map]);



    return (
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: centerPos.x, //37.566826,
          lng: centerPos.y //126.9786567,
        }}
        style={{
          width: "100%",
          height: "350px",
        }}
        level={3}
        onCreate={setMap}
      >
        
        {markers.map((marker) => (

          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onMouseOver={() => setInfo(marker)}
            onMouseOut={()=>setInfo(null)}
            onClick={()=>{if(marker.linkTo) history.push(`/restaurant/${marker.linkTo}`)}}
          >
            {info &&info.content === marker.content && (
                <Marker>{marker.content}</Marker>
            )}
          </MapMarker>
        ))}
      </Map>
    )
}

const Marker = styled.div`
  width: 180px;
  font-size: 1em;
  padding: 5px;
  font-weight: bold;
  white-space: pre-wrap;
  text-align: center;
  color: #000;
`;