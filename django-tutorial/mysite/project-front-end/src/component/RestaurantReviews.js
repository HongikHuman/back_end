import React, { useState } from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import { FcSearch } from "react-icons/fc";
import { RiVipCrownFill } from "react-icons/ri";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function Review({ reviewinfos, reviewphotos }) {
    const [reviewinfo, setReviewInfos] = useState(reviewinfos);
    const [seeMoreClick, setSeeMoreClick] = useState(true);

    const userPhoto = [];

    const settings = {
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        prevArrow: <BsFillArrowLeftCircleFill color="black"/>,
        nextArrow: <BsFillArrowRightCircleFill color="black"/>
    };

    const handleSeeMoreClick = (e) => {
        setSeeMoreClick(false);
    };

    const showUserPhoto = () => {

        if(reviewinfo.Auth === "true") {
            userPhoto.push(
                <UserPhoto>
                    <RiVipCrownFill size='30px' color='gold'/>
                    <img src={reviewinfo.user_img_url} />
                    <span>{reviewinfo.user_id}</span>
                </UserPhoto>
            )
        }

        else {
            userPhoto.push(
                <UserPhoto>
                    <img src={reviewinfo.user_img_url} />
                    <span>{reviewinfo.user_id}</span>
                </UserPhoto>
            )
        }

        return userPhoto;
    };

    return (
        <ReviewBox>
            <UserInfo>
                {showUserPhoto()}     
            </UserInfo>
            <div className="datatitlewrap">
                <span className="date">{reviewinfo.date}</span>
                <span className="title">{reviewinfo.title}</span>
                <div><FcSearch />{reviewinfo.views}</div>
            </div>
            { seeMoreClick ? 
            <div className="sliced_review">{reviewinfo.review.slice(0, 190)}<SeeMore onClick={handleSeeMoreClick}>...더보기</SeeMore></div>
            : <WholeReview className="whole_review">
                <div>{reviewinfo.review}</div>
                <PhotoWrap>
                    <Slider {...settings}>
                        {reviewphotos.map((item, index) => {
                            return (
                                <PhotoLine>
                                    <PhotoCard key={index}>
                                        <img src={item} />
                                    </PhotoCard>
                                </PhotoLine>
                            );
                        })}
                    </Slider>
                </PhotoWrap>
              </WholeReview>
            }
        </ReviewBox>
    );
};

const ReviewBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 975px;
    border-bottom: 1px solid rgb(219, 219, 219);
    margin-top: 15px;

    .title {
        font-size: 25px;
        font-weight: 500;
    }

    .sliced_review {
        margin-top: -18px;
        width: 500px;
    }

    .whole_review {
        margin-top: -18px;
        margin-bottom: 18px;
        width: 500px;
    }

    .datatitlewrap {
        margin-top: -30px;
        display: flex;
        flex-direction: column;
    }

    .date {
        padding: 0 0 5px 0;
    }
`;

const SeeMore = styled.button`
    display: inline;
    color: orange;
    border: none;
    background: none;
`;

const UserInfo = styled.div`
    font-size: 30px;
    font-weight: 1000;
    font-family: 'NanumAGiSaRangCe';
`;

const UserPhoto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;

    & > img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
`;

const WholeReview = styled.div`

`;

const PhotoWrap = styled.div`
    width: 100%;
    align-items: center;
    margin-top: 10px;
`;

const PhotoLine = styled.div`
`;

const PhotoCard = styled.div`
    
    align-items: center;

    & > img {
        width: 100%;
        height: 125px;
        object-fit: cover;
    }
`;