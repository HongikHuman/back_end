import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function HistoryCards( {element} ) {
    return (
        <Card className="acard">
            <ImgBox>
                <img src={element.img_url} alt="..." />
            </ImgBox>
            <Info style={{fontSize: '25px', fontWeight: '10px'}}>
                <h3>{element.name}</h3>
                <p className="school">근처 학교: {element.school}</p>
                <p className="addr">{element.address}</p>
                <SeeMorePostDiv>
                    <Link to={`/places/${element.res_id}`} style={{textDecoration: "none", color: "black"}}><SeeMorePost>음식점 세부페이지 바로가기></SeeMorePost></Link>
                </SeeMorePostDiv>
            </Info>
        </Card>
    )
}

const Card = styled.div`
    width: 400px;
    height: 250px;
    display: flex;
    border: 1px solid rgb(219, 219, 219);
`;

const ImgBox = styled.div`
    width: 70%;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Info = styled.div`
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & .school {
        font-size: 15px;
        margin-top: 5px;
    }

    & .addr {
        margin-top: 20px;
        font-size: 10px;
    }
`;

const SeeMorePostDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`;

const SeeMorePost = styled.button`
    width: auto;
    background: none;
    border: none;
    color: orange;
    font-size: 15px;
`;