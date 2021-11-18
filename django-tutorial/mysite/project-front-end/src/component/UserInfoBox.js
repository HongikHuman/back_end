import React from "react";
import styled from 'styled-components';

export default function UserInfoBox() {

    const user_infos = [
        {name: '자맛추', user_img: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', howmanyreviews: '12', likes: '28', school: '홍익대', recommend: '16'}
    ];

    return (
        <BoxWrap className="container">
            <h2 style={{color: 'white'}}>History</h2>
            <UserImgBox>
                <img src='https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2'/>
            </UserImgBox>
            <InfoWrap>
                <span className="nickname">{user_infos[0].name}</span>
                <span className="school">{user_infos[0].school}</span>
                <span className="auth">학교 인증을 완료하셨습니다.</span>
            </InfoWrap>
            <ActionWrap>
                <ImgBox>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <p>작성한 리뷰 수 ></p>
                <p className="contents">{user_infos[0].howmanyreviews}</p>
                </ImgBox>
                <ImgBox>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <p>추천한 맛집 수 ></p>
                <p className="contents">{user_infos[0].recommend}</p>
                </ImgBox>
                <ImgBox>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <p>찜한 맛집 수 ></p>
                <p className="contents">{user_infos[0].likes}</p>
                </ImgBox>
            </ActionWrap>
        </BoxWrap>
    )
}

const BoxWrap = styled.div`
    display: flex;
    background: rgb(240, 215, 54);
    height: 300px;
    margin-bottom: 30px;

    & > h2 {
        height: 5vh;
        margin: 10px 0 0 7px;
    }
`;

const UserImgBox = styled.div`
    width: 220px;
    height: 300px;
    display: flex;
    align-items: center;

    & > img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
`;

const InfoWrap = styled.div`
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;

    & .nickname {
        color: white;
        font-size: 80px;
        font-weight: 1000;
        font-family: 'NanumAGiSaRangCe';
    }

    & .school {
        color: white;
        font-size: 40px;
        font-weight: 700;
        font-family: 'NanumAGiSaRangCe';
    }

    & .auth {
        color: white;
        font-size: 20px;
        font-weight: 700;
        font-family: 'NanumAGiSaRangCe';
    }
`;

const ActionWrap = styled.div`
    width: 650px;
    height: 300px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

const ImgBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 200px;
    color: white;
    margin-right: 20px;
    justify-content: center;
    align-items: flex-start;

    & > svg {
        width: 60px;
        height: 60px;
    }

    & > p {
        margin: 7px 0 -6px 0;
    }

    & .contents {
        font-size: 30px;
    }
`;