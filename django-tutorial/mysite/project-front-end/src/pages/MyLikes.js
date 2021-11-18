import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import LikesCard from '../component/LikesCard';
import MyPagination from'../component/MyPagination';
import { Link } from 'react-router-dom';
import _ from 'lodash';


export default function MyLikes() {

    const getRest = () => {
        const restaurants = [
            {res_id: 1, name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', school: ['홍익대', '연세대', '서강대'], img_url: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F', likes: '300', category: '한식'},
            {res_id: "2", name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', school: ['홍익대', '연세대', '서강대'], img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg', likes: '300', category: '일식'},
            {res_id: "3", name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', school: ['홍익대', '연세대', '서강대'], img_url: 'https://img.siksinhot.com/article/1456730835391124.jpg', likes: '300', category: '일식'},
            {res_id: "4", name: '치치', address: '서울특별시 마포구 서교동 360-19', school: ['홍익대', '연세대', '서강대'], img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg', likes: '300', category: '주점'},
            {res_id: "5", name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', school: ['홍익대', '연세대', '서강대'], img_url: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925', likes: '300', category: '주점'},
            {res_id: "6", name: '광안리', address: '서울특별시 마포구 서교동 하동 396-44', school: ['홍익대', '연세대', '서강대'], img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg', likes: '300', category: '일식'},
            {res_id: "7", name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', school: ['홍익대', '연세대', '서강대'], img_url: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A', likes: '300', category: '중식'},
            {res_id: "8", name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', school: ['홍익대', '연세대', '서강대'], img_url: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG', likes: '300', category: '양식'},
            {res_id: "9", name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', school: ['홍익대', '연세대', '서강대'], img_url: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg', likes: '300', category: '분식'},
            {res_id: "10", name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', school: ['홍익대', '연세대', '서강대'], img_url: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG', likes: '300', category: '한식'},
            {res_id: "1", name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', school: ['홍익대', '연세대', '서강대'], img_url: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F', likes: '300', category: '한식'},
            {res_id: "2", name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', school: ['홍익대', '연세대', '서강대'], img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg', likes: '300', category: '일식'},
            {res_id: "3", name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', school: ['홍익대', '연세대', '서강대'], img_url: 'https://img.siksinhot.com/article/1456730835391124.jpg', likes: '300', category: '일식'},
            {res_id: "4", name: '치치', address: '서울특별시 마포구 서교동 360-19', school: ['홍익대', '연세대', '서강대'], img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg', likes: '300', category: '주점'},
            {res_id: "5", name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', school: ['홍익대', '연세대', '서강대'], img_url: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925', likes: '300', category: '주점'},
            {res_id: "6", name: '광안리', address: '서울특별시 마포구 서교동 하동 396-44', school: ['홍익대', '연세대', '서강대'], img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg', likes: '300', category: '일식'},
            {res_id: "7", name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', school: ['홍익대', '연세대', '서강대'], img_url: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A', likes: '300', category: '중식'},
            {res_id: "8", name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', school: ['홍익대', '연세대', '서강대'], img_url: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG', likes: '300', category: '양식'},
            {res_id: "9", name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', school: ['홍익대', '연세대', '서강대'], img_url: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg', likes: '300', category: '분식'},
            {res_id: "10", name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', school: ['홍익대', '연세대', '서강대'], img_url: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG', likes: '300', category: '한식'},
            {res_id: "1", name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', school: ['홍익대', '연세대', '서강대'], img_url: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F', likes: '300', category: '한식'},
            {res_id: "2", name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', school: ['홍익대', '연세대', '서강대'], img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg', likes: '300', category: '일식'},
            {res_id: "3", name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', school: ['홍익대', '연세대', '서강대'], img_url: 'https://img.siksinhot.com/article/1456730835391124.jpg', likes: '300', category: '일식'},
            {res_id: "4", name: '치치', address: '서울특별시 마포구 서교동 360-19', school: ['홍익대', '연세대', '서강대'], img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg', likes: '300', category: '주점'},
            {res_id: "5", name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', school: ['홍익대', '연세대', '서강대'], img_url: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925', likes: '300', category: '주점'},
            {res_id: "6", name: '광안리', address: '서울특별시 마포구 서교동 하동 396-44', school: ['홍익대', '연세대', '서강대'], img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg', likes: '300', category: '일식'},
            {res_id: "7", name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', school: ['홍익대', '연세대', '서강대'], img_url: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A', likes: '300', category: '중식'},
            {res_id: "8", name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', school: ['홍익대', '연세대', '서강대'], img_url: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG', likes: '300', category: '양식'},
            {res_id: "9", name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', school: ['홍익대', '연세대', '서강대'], img_url: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg', likes: '300', category: '분식'},
            {res_id: "10", name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', school: ['홍익대', '연세대', '서강대'], img_url: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG', likes: '300', category: '한식'},
        ]
        return restaurants;
    }

    const [restaurants, setRestaurants] = useState({
        info: getRest(),
        pageSize: 8, //한 페이지에 보여줄 아이템 개수
        currentPage: 1   //활성화된 페이지
    });

    const handlePageChange = (page) => {
        setRestaurants({...restaurants, currentPage: page});
        window.scrollTo(0, 0);
    };

    const paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize; // 자를 배열의 시작점

        return _(items)
            .slice(startIndex) // 시작점부터 배열을 자르되
            .take(pageSize) // pageSize만큼의 배열을 취함
            .value(); // lodash wrapper 객체를 regular 배열로 변환
    }

    const {info, pageSize, currentPage} = restaurants;
    const pagedRests = paginate(info, currentPage, pageSize);

    const { length: count } = restaurants.info;
    
    const showRestaurants = () => {
        
        let idx = 0; let cnt = 0;
        let tmp = []; let result = [];
        
        while(idx < 8) {   //더 늘릴 수 있음

            if (pagedRests[idx] && !pagedRests[idx + 1]) {
                tmp.push(
                    <CardWrap>
                        <LikesCard element={pagedRests[idx]} />
                        <DummyDiv></DummyDiv>
                    </CardWrap>
                )
            }

            else if (!pagedRests[idx] && !pagedRests[idx + 1]) {
                tmp.push(
                    <CardWrap>
                        <DummyDiv></DummyDiv>
                        <DummyDiv></DummyDiv>
                    </CardWrap>
                )
            }

            else {
                tmp.push(
                
                    <CardWrap>
                        <LikesCard element={pagedRests[idx]} />
                        <LikesCard element={pagedRests[idx+1]} />
                    </CardWrap>
                
                )
            }
            
            result.push(tmp[cnt]);
            idx = idx + 2;    
            cnt++;
            
        }
        
        return result;
    }
    
    if(count === 0) {
        return (
            <div>
                <Container className="container">
                    <PageTitle className="container">
                        <p>내가 찜한 음식점</p>
                    </PageTitle>
                    <NoItems>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/512/5893/5893023.png" />
                            <p>찜한 음식점이 없네요 ㅠ.ㅠ</p>
                        </div>
                    </NoItems>
                </Container>
            </div>
        );
    };

    return (
        
        <Container className="container">
            <PageTitle className="container">
                <p>내가 찜한 음식점</p>
                <p className="resCounts">{count}개의 찜한 음식점이 있습니다.</p>
            </PageTitle>
            {showRestaurants()}
            <div className="paginationWrap">
                <MyPagination 
                    itemsCount={count}
                    pageSize={restaurants.pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange} 
                />
            </div>
        </Container>
        
    );

}

const Container = styled.div`
    margin: 0 auto;
    margin-bottom: 50px;
    .paginationWrap {
        display: flex;
        justify-content: center;
    }
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

const CardWrap = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 0 30px 0;
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

const DummyDiv = styled.div`
    width: 500px;
    height: 250px;
`;