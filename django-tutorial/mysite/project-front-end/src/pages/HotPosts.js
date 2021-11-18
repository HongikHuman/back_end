import React, { useEffect, useState } from "react";
import HotPostsCards from '../component/HotPostsCards';

import styled from 'styled-components';

const hot_posts = [
    {res_id: "1", id: 1, user_name: '노경민', user_id: "noh", title: '노경민의 맛집추천', restaurant_name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', likes: 1232, restaurant_img_url: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "한강 눈에 비친 서울은 리빌딩 올림픽 대로는 터질 듯이 막혀 siri Play me something chill It's 6pm 노을 빛은 핑크색 도로 위에 줄 지은 빨간색 실 I'm stressing out I was stressing out 못 가 제시간에 하지만 괜찮아 남보다 느린 대신에 사고만 안 나면 됐잖아 Back when I was in 철원 그 느린 시간도 때웠잖아 Man fuck time 나는 벽 타듯이 시간을 넘어왔다 이걸 너가 모른다면 난 너랑 할 말 없다 드디어 봄날 옴 고마워 기다려줘서 날 Still having good time"},
    {res_id: "2", id: 2, user_name: '박준서', user_id: "bak", title: '박준서의 맛집추천', restaurant_name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', likes: 1045, restaurant_img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "Hey let's go to the 한강 Have a good time, have a good time Look at all this people Stand in line in line, but I gotta get mine 한강 Gang, gotta get mine, 한강 gang Skippin these lines, 한강 gang Have a good time, have a good time 미세먼지 없는 날은 아까워 왠지 Chillin' with my homie 병언, 한강 gang shit Wing doors go up at the riverside 사람들이 핸드폰을 들고 찍어 날 Ay, 광명에서 온 여의도민 Rock star Ay, 연예인이라기보다도 악사 Ay, 간장게장 Is better than lobsters 난 이 세상에 나의 노래들로 낙서해 Basquiat marriott, 내 걱정 마, 이건 내 인생이야, yeah Look at my watch yeah, look at my Rollie, yeah 성공했다면 네게 다가오는 놈을 멀리해 If and Co ice rings, yeah, 편의점 Ice creams, yeah 섞어 입어 Adidas, Nike 아님 Bape and Supreme, yeah 한강 Gangs, don't care about those thangs We just out here puttin' in that work"},
    {res_id: "3", id: 3, user_name: '봉세환', user_id: "bong", title: '봉세환의 맛집추천', restaurant_name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', likes: 978, restaurant_img_url: 'https://img.siksinhot.com/article/1456730835391124.jpg', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "한강 눈에 비친 서울은 리빌딩 올림픽 대로는 터질 듯이 막혀 siri Play me something chill It's 6pm 노을 빛은 핑크색 도로 위에 줄 지은 빨간색 실 I'm stressing out I was stressing out 못 가 제시간에 하지만 괜찮아 남보다 느린 대신에 사고만 안 나면 됐잖아 Back when I was in 철원 그 느린 시간도 때웠잖아 Man fuck time 나는 벽 타듯이 시간을 넘어왔다 이걸 너가 모른다면 난 너랑 할 말 없다 드디어 봄날 옴 고마워 기다려줘서 날 Still having good time"},
    {res_id: "4", id: 4, user_name: '이수진', user_id: "lee", title: '이수진의 맛집추천', restaurant_name: '치치', address: '서울특별시 마포구 서교동 360-19', likes: 850, restaurant_img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "Hey let's go to the 한강 Have a good time, have a good time Look at all this people Stand in line in line, but I gotta get mine 한강 Gang, gotta get mine, 한강 gang Skippin these lines, 한강 gang Have a good time, have a good time 미세먼지 없는 날은 아까워 왠지 Chillin' with my homie 병언, 한강 gang shit Wing doors go up at the riverside 사람들이 핸드폰을 들고 찍어 날 Ay, 광명에서 온 여의도민 Rock star Ay, 연예인이라기보다도 악사 Ay, 간장게장 Is better than lobsters 난 이 세상에 나의 노래들로 낙서해 Basquiat marriott, 내 걱정 마, 이건 내 인생이야, yeah Look at my watch yeah, look at my Rollie, yeah 성공했다면 네게 다가오는 놈을 멀리해 If and Co ice rings, yeah, 편의점 Ice creams, yeah 섞어 입어 Adidas, Nike 아님 Bape and Supreme, yeah 한강 Gangs, don't care about those thangs We just out here puttin' in that work"},
    {res_id: "5", id: 5, user_name: '채승희', user_id: "chae", title: '채승희의 맛집추천', restaurant_name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', likes: 799, restaurant_img_url: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "한강 눈에 비친 서울은 리빌딩 올림픽 대로는 터질 듯이 막혀 siri Play me something chill It's 6pm 노을 빛은 핑크색 도로 위에 줄 지은 빨간색 실 I'm stressing out I was stressing out 못 가 제시간에 하지만 괜찮아 남보다 느린 대신에 사고만 안 나면 됐잖아 Back when I was in 철원 그 느린 시간도 때웠잖아 Man fuck time 나는 벽 타듯이 시간을 넘어왔다 이걸 너가 모른다면 난 너랑 할 말 없다 드디어 봄날 옴 고마워 기다려줘서 날 Still having good time"},
    {res_id: "6", id: 6, user_name: '안경민', user_id: "ahn", title: '안경민의 맛집추천', restaurant_name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시 KR', likes: 729, restaurant_img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "Hey let's go to the 한강 Have a good time, have a good time Look at all this people Stand in line in line, but I gotta get mine 한강 Gang, gotta get mine, 한강 gang Skippin these lines, 한강 gang Have a good time, have a good time 미세먼지 없는 날은 아까워 왠지 Chillin' with my homie 병언, 한강 gang shit Wing doors go up at the riverside 사람들이 핸드폰을 들고 찍어 날 Ay, 광명에서 온 여의도민 Rock star Ay, 연예인이라기보다도 악사 Ay, 간장게장 Is better than lobsters 난 이 세상에 나의 노래들로 낙서해 Basquiat marriott, 내 걱정 마, 이건 내 인생이야, yeah Look at my watch yeah, look at my Rollie, yeah 성공했다면 네게 다가오는 놈을 멀리해 If and Co ice rings, yeah, 편의점 Ice creams, yeah 섞어 입어 Adidas, Nike 아님 Bape and Supreme, yeah 한강 Gangs, don't care about those thangs We just out here puttin' in that work"},
    {res_id: "7", id: 7, user_name: '팍준서', user_id: "pak", title: '팍준서의 맛집추천', restaurant_name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', likes: 603, restaurant_img_url: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "한강 눈에 비친 서울은 리빌딩 올림픽 대로는 터질 듯이 막혀 siri Play me something chill It's 6pm 노을 빛은 핑크색 도로 위에 줄 지은 빨간색 실 I'm stressing out I was stressing out 못 가 제시간에 하지만 괜찮아 남보다 느린 대신에 사고만 안 나면 됐잖아 Back when I was in 철원 그 느린 시간도 때웠잖아 Man fuck time 나는 벽 타듯이 시간을 넘어왔다 이걸 너가 모른다면 난 너랑 할 말 없다 드디어 봄날 옴 고마워 기다려줘서 날 Still having good time"},
    {res_id: "8", id: 8, user_name: '봉사환', user_id: "hwan", title: '봉사환의 맛집추천', restaurant_name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', likes: 505, restaurant_img_url: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "Hey let's go to the 한강 Have a good time, have a good time Look at all this people Stand in line in line, but I gotta get mine 한강 Gang, gotta get mine, 한강 gang Skippin these lines, 한강 gang Have a good time, have a good time 미세먼지 없는 날은 아까워 왠지 Chillin' with my homie 병언, 한강 gang shit Wing doors go up at the riverside 사람들이 핸드폰을 들고 찍어 날 Ay, 광명에서 온 여의도민 Rock star Ay, 연예인이라기보다도 악사 Ay, 간장게장 Is better than lobsters 난 이 세상에 나의 노래들로 낙서해 Basquiat marriott, 내 걱정 마, 이건 내 인생이야, yeah Look at my watch yeah, look at my Rollie, yeah 성공했다면 네게 다가오는 놈을 멀리해 If and Co ice rings, yeah, 편의점 Ice creams, yeah 섞어 입어 Adidas, Nike 아님 Bape and Supreme, yeah 한강 Gangs, don't care about those thangs We just out here puttin' in that work"},
    {res_id: "9", id: 9, user_name: '리수진', user_id: "ree", title: '리수진의 맛집추천', restaurant_name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', likes: 477, restaurant_img_url: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "한강 눈에 비친 서울은 리빌딩 올림픽 대로는 터질 듯이 막혀 siri Play me something chill It's 6pm 노을 빛은 핑크색 도로 위에 줄 지은 빨간색 실 I'm stressing out I was stressing out 못 가 제시간에 하지만 괜찮아 남보다 느린 대신에 사고만 안 나면 됐잖아 Back when I was in 철원 그 느린 시간도 때웠잖아 Man fuck time 나는 벽 타듯이 시간을 넘어왔다 이걸 너가 모른다면 난 너랑 할 말 없다 드디어 봄날 옴 고마워 기다려줘서 날 Still having good time"},
    {res_id: "10", id: 10, user_name: '죄송희', user_id: "joi", title: '죄송희의 맛집추천', restaurant_name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', likes: 230, restaurant_img_url: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "Hey let's go to the 한강 Have a good time, have a good time Look at all this people Stand in line in line, but I gotta get mine 한강 Gang, gotta get mine, 한강 gang Skippin these lines, 한강 gang Have a good time, have a good time 미세먼지 없는 날은 아까워 왠지 Chillin' with my homie 병언, 한강 gang shit Wing doors go up at the riverside 사람들이 핸드폰을 들고 찍어 날 Ay, 광명에서 온 여의도민 Rock star Ay, 연예인이라기보다도 악사 Ay, 간장게장 Is better than lobsters 난 이 세상에 나의 노래들로 낙서해 Basquiat marriott, 내 걱정 마, 이건 내 인생이야, yeah Look at my watch yeah, look at my Rollie, yeah 성공했다면 네게 다가오는 놈을 멀리해 If and Co ice rings, yeah, 편의점 Ice creams, yeah 섞어 입어 Adidas, Nike 아님 Bape and Supreme, yeah 한강 Gangs, don't care about those thangs We just out here puttin' in that work"},
]

export default function Hot_Posts() {
    const [posts, setHotPosts] = useState(hot_posts);

    const showPosts = () => {

        let idx = 0;
        let result = [];

        while(idx < 10) {
            result.push(
                <HotPostsCards hotpost={posts[idx]}/>
            )
            idx = idx + 1;
        }

        return result;
    }

    useEffect(() => {   
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container">
            <HotPostsContainer>
                <div className="body-text">
                    <h1 className="title">Hot 리뷰 게시판</h1>
                    <p className="text">많은 공감을 받은 리뷰를 소개합니다!</p>
                </div>
                <div className="posts">
                    {showPosts()}
                </div>
            </HotPostsContainer>
        </div>
    );
};

const HotPostsContainer = styled.div`
margin: 0 0 150px 0;

& .body-text {
    border-bottom: 1px solid #9a9a9a;
    height: 200px;
}

& .body-text .title {
    fontSize: '50px'
    marginBottom: '150px';
    height: 100px;
    font-size: 55px;
}

& .body-text .text {
    font-size: 25px;
}

& .posts {
    display: flex;
    flex-direction: column;
    align-items: center;
`;