import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';

export default function Photos({ Information }) {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: false
    };

    const images = [
        'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F',
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg',
        'https://img.siksinhot.com/article/1456730835391124.jpg',
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg',
        'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925',
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg',
        'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A',
        'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'
    ]
  
    return (
        <PhotoContainer>
            <Slider {...settings}>
                {images.map((item, index) => {
                    return (
                        <PhotoLine>
                            <PhotoCard key={index}>
                                <img src={item} />
                            </PhotoCard>
                        </PhotoLine>
                    );
                })}
            </Slider>
        </PhotoContainer>
    );
};

const PhotoContainer = styled.div`
    width: 1295px;
    align-items: center;
`;

const PhotoLine = styled.div`
`;

const PhotoCard = styled.div`

    & > img {
        width: 320px;
        height: 340px;
        object-fit: cover;
    }
`;