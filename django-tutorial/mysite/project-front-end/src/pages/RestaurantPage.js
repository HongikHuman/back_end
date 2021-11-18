import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import RestaurantPost from '../component/RestaurantPost';
import Photos from '../component/RestaurantPhotos';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Restaurant( {resInfo} ) {
    let param = useParams();
    let [info, setInfo] = useState(
        {res_id: 1, name: '히메시야', xcoord: '126.926793', ycoord: '37.556249',
        address: '서울특별시 마포구 상수동 독막로15길 3-18', likes: 1232, wish: 200, reviews: 10,
        img_url: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F',
        tel: '02-320-1114', foodtype: '한식'}
    );

    useEffect(() => {

        axios.get(`https://127.0.0.1/app/places/${param}`)
        .then((res)=>{
            setInfo(res.data);
            window.scrollTo(0, 0);
        })
        .catch((err)=>console.log(err));
    }, []);

    return (
        <div className="container">
            <RestaurantContainer>
                <Photos Information={info}/>
                <RestaurantPost className="aPost" Information={info} />
            </RestaurantContainer>
        </div>
    )
};

const RestaurantContainer = styled.div`
margin: 0 0 150px 0;
`;