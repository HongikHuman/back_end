import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function HotPost ({ hotpost }){

    const [thumbClick, setThumbClick] = useState(false);
    const [seeMoreClick, setSeeMoreClick] = useState(true);
    let ID = hotpost.res_id;

    const handleThumbClick = (e) => {
        setThumbClick(true);

        if(thumbClick === true) {
            setThumbClick(false);
        }
    };

    const handleSeeMoreClick = (e) => {
        setSeeMoreClick(false);
    };

    return (
        <PostBox>
            <ImgBox><img src={hotpost.restaurant_img_url} className="res_img" alt="~~"/></ImgBox>
            <TextBox>
                <TitleWrap>
                    <Title>
                        <h3>{hotpost.title} - {hotpost.restaurant_name}</h3>
                    </Title>
                    <LikeBox>
                        <p className="likes">{hotpost.likes}</p>
                        <button type="button" onClick={handleThumbClick}>
                        { thumbClick ? <FaThumbsUp size='32px'/> : <FaRegThumbsUp size='32px'/> }
                        </button>
                        <p className="para">공감해요</p>    
                    </LikeBox>
                </TitleWrap>
                <ReviewContentBox>
                    <UserInfo>
                        <UserPhoto><img src={hotpost.user_img_url} /></UserPhoto>      
                        {hotpost.user_id} 
                    </UserInfo>
                    <Review>
                        { seeMoreClick ? <div>{hotpost.review.slice(0, 200)}<SeeMore onClick={handleSeeMoreClick}>...더보기</SeeMore></div> 
                        : <div>{hotpost.review}</div> }  
                    </Review>
                </ReviewContentBox>
                <SeeMorePostDiv>
                    <Link to={`/restaurant/${hotpost.res_id}`}><SeeMorePost>이 음식점에 대한 리뷰 더보기></SeeMorePost></Link>
                </SeeMorePostDiv>
            </TextBox>
        </PostBox>
    ); 

};


const PostBox = styled.div`
    display: flex;
    width: 960px;
    height: 10%;
    margin-top: 5px;
    border-bottom: 1px solid rgb(219, 219, 219);
`;

const ImgBox = styled.div`
    display: flex;
    width: 40%;
    align-items: center;

    & > img {
        width: 360px;
        height: 240px;
        object-fit: cover;
    }
`;

const TextBox = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
`;

const TitleWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 25%;
    margin-top: 10px;
`;

const Title = styled.span`
    width: 30rem;
    height: 40px;
    padding: 0 0 0 20px;

    & > h3 {
        margin-top: 27px;
    }
`;

const LikeBox = styled.div`
    margin-right: 10px;
    display: flex;
    flex-direction: column;

    & > button {
        background: none;
        border: none;
        width: 36px;
        height: 36px;
        margin-left: 3px;
    }

    & .likes {
        width: 50px;
        margin: 0 0 -3px 0;
        font-size: 15px;
    }

    & .para {
        width: 50px;
        font-size: 10px;
    }
`;

const ReviewContentBox = styled.div`
    display: inline;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Review = styled.p`
    display: inline;
    width: 100%;
    line-height: 1.8;
`;

const UserInfo = styled.figure`
    display: inline;
    position: static;
    width: auto;
    font-size: 30px;
    font-weight: 1000;
    font-family: 'NanumAGiSaRangCe';
    padding:0 8px 0 0; 
`;

const UserPhoto = styled.div`
    display: inline;
    width: 30px;
    height: 30px;

    & > img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 5px;
    }
`;

const SeeMore = styled.button`
    display: inline;
    color: orange;
    border: none;
    background: none;
`;

const SeeMorePostDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 0 10px 0;
`;

const SeeMorePost = styled.button`
    position: static;
    width: auto;
    background: none;
    border: none;
    padding: 20px 0 0 0;
    color: orange;
`;