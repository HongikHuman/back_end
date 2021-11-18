import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HistoryCards from '../component/HistoryCards';

export default function History() {

    let [elements, setElements] = useState(restaurants);
    const len = (elements.length > 12 ? 12 : elements.length);

    const { length: count} = elements;
    
    const showRestaurants = () => {

        let idx = 0; let cnt = 0;
        let tmp = []; let result = [];
        
        while(idx < len) {   //더 늘릴 수 있음

            if(!elements[idx+1] && !elements[idx+2]) {
                tmp.push(
                    <CardWrap>
                        <HistoryCards element={elements[idx]} />
                    </CardWrap>
                )
            }

            else if(!elements[idx+2] && elements[idx+1]) {
                tmp.push(
                    <CardWrap>
                        <HistoryCards element={elements[idx]} />
                        <HistoryCards element={elements[idx+1]} />
                        <DummyDiv></DummyDiv>
                    </CardWrap>
                )
            }

            else {
                tmp.push(
                    <CardWrap>
                        <HistoryCards element={elements[idx]} />
                        <HistoryCards element={elements[idx+1]} />
                        <HistoryCards element={elements[idx+2]} />
                    </CardWrap>
                )
            }

            result.push(tmp[cnt]);
            idx = idx + 3;    
            cnt++;
        }
       
        return result;
    }

    if(count === 0) {
        return (
            <div>
                <Container className="container">
                    <PageTitle className="container">
                        <p>최근 조회한 음식점</p>
                    </PageTitle>
                    <NoItems>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/512/5893/5893023.png" />
                            <p>최근 조회한 음식점이 없네요 ㅠ.ㅠ</p>
                        </div>
                    </NoItems>
                </Container>
            </div>
        );
    }
    
    return (
        <div>
            <PageTitle className="container">
                <p>최근 조회한 음식점</p>
                <p className="resCounts"></p>
            </PageTitle>
            <Container className="container">
                {showRestaurants()}
            </Container>
        </div>
    );
}

const Container = styled.div`
    margin: 0 auto;
    margin-bottom: 150px;
`;

const CardWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 30px 0;
`;

const PageTitle = styled.div`
    margin-bottom: 50px;
    border-bottom: 3px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
        font-size: 25px;
        text-align: left;
    }

    .resCounts {
        font-size: 20px;
    }
`;

const DummyDiv = styled.div`
    width: 400px;
    height: 250px;
`;

const NoItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1296px;
    height: 70vh;

    @media only screen and (max-width: 1000px) {

        width: 700px;
        height: 70vh;

        & > div > img {
            width: 50px;
            height: 50px;
        }
    
        & > div > p {
            font-weight: 1000;
            font-size: 15px;
        }
    }

    & > div > img {
        width: 100px;
        height: 100px;
    }

    & > div > p {
        font-weight: 1000;
        font-size: 30px;
    }
`;


const restaurants = [
    {res_id: 1, name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {res_id: 2, name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {res_id: 3, name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', school: "홍익대", img_url: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {res_id: 4, name: '치치', address: '서울특별시 마포구 서교동 360-19', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {res_id: 5, name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {res_id: 6, name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {res_id: 7, name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {res_id: 8, name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', school: "홍익대", img_url: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {res_id: 9, name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', school: "홍익대", img_url: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {res_id: 10, name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', school: "홍익대", img_url: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},
    {res_id: 1, name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {res_id: 2, name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {res_id: 3, name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', school: "홍익대", img_url: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {res_id: 4, name: '치치', address: '서울특별시 마포구 서교동 360-19', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {res_id: 5, name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {res_id: 6, name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {res_id: 7, name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {res_id: 8, name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', school: "홍익대", img_url: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {res_id: 9, name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', school: "홍익대", img_url: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {res_id: 10, name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', school: "홍익대", img_url: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},
    {res_id: 1, name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {res_id: 2, name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {res_id: 3, name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', school: "홍익대", img_url: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {res_id: 4, name: '치치', address: '서울특별시 마포구 서교동 360-19', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {res_id: 5, name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {res_id: 6, name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {res_id: 7, name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {res_id: 8, name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', school: "홍익대", img_url: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {res_id: 9, name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', school: "홍익대", img_url: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {res_id: 10, name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', school: "홍익대", img_url: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},
]