import React, { useState, useEffect } from 'react';
import Top10Cards from '../component/Top10Cards';
import styled from 'styled-components';

const top_restaurants = [
    {rank: 1, name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', likes: 1232, img_url: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {rank: 2, name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', likes: 1045, img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {rank: 3, name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', likes: 978, img_url: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {rank: 4, name: '치치', address: '서울특별시 마포구 서교동 360-19', likes: 850, img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {rank: 5, name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', likes: 799, img_url: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {rank: 6, name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시 KR', likes: 729, img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {rank: 7, name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', likes: 603, img_url: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {rank: 8, name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', likes: 505, img_url: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {rank: 9, name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', likes: 477, img_url: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {rank: 10, name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', likes: 230, img_url: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},
]

export default function Top10_page(){
    const [restaurants, setRestaurants] = useState(top_restaurants);
    
    useEffect(() => {
        // console.log(restaurants);
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container">
            <Top10BodyWrap>
                <div className="body-text">
                    <h1 className="title">대학별 맛집 랭킹</h1>
                    <p className="text">이 학교의 맛집 랭킹을 만나보세요!</p>
                </div>
                <Top10Cards className="cards" restaurants={restaurants}/>
            </Top10BodyWrap>
        </div>
    );
};

const Top10BodyWrap = styled.div`
    margin: 0 0 150px 0;

    & .body-text {
        border-bottom: 1px solid #9a9a9a;
        height: 200px;
    }

    & .body-text .title {
        height: 100px;
        font-size: 55px;
    }

    & .body-text .text {
        font-size: 25px;
    }

    & .cards {
        justify-contents: center;
    }
`;