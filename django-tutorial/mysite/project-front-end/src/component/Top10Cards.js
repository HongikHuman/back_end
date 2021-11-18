import React from 'react';
import styled from 'styled-components';

export default function Top10 ({ restaurants }){
    
    return (
        <div className="container">
            {restaurants.map(restaurant => {
                return (
                    <CardBoxWrap className="card mt-5" key={restaurant.rank}>
                        <CardWrap className="row g-0">
                            <ImageBoxWrap className="col-md-4">
                                <img src={restaurant.img_url} className="img-fluid rounded-start" alt="..." />
                            </ImageBoxWrap>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <CardNameWrap>
                                        <h2 className="card-title">{restaurant.rank}. {restaurant.name}</h2>
                                        <p className="card-likes" style={{color: 'red'}}>좋아요수 {restaurant.likes}개</p>
                                    </CardNameWrap>
                                    <CardAddressWrap><small className="text-muted">{restaurant.address}</small></CardAddressWrap>
                                    <CardSentenceWrap>#홍대맛집 #연대맛집 #서강대맛집 #이대맛집</CardSentenceWrap>
                                </div>
                            </div>
                        </CardWrap>
                    </CardBoxWrap>
                );
            })}
        </div>
    );
};

const CardBoxWrap = styled.div`
    height: 300px;
`;

const CardWrap = styled.div`
    height: 300px;
`;

const ImageBoxWrap = styled.div`
    height: 300px;
    display: flex;
    align-items: center;

    & > img {
        width: 400px;
        height: 300px;
        object-fit: cover;
    }
`;

const CardNameWrap = styled.div`
    height: 70px;  
    display: flex;
    align-items: center;
    text-align: left;

    & > h2 {
        width: 80%;
        margin-left: 10px;
        justify-content: center;
    }
`;

const CardAddressWrap = styled.div`
    font-size: 20px;
    text-align: left;
    margin: 0 0 10px 10px;
`;

const CardSentenceWrap = styled.div`
    text-align: left;
    margin: 0 0 10px 10px;
`;