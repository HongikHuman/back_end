import React, { useEffect } from "react";
import styled from 'styled-components';
import RestaurantPost from '../component/RestaurantPost';
import Photos from '../component/RestaurantPhotos';

export default function Restaurant( {resInfo} ) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="container">
            <RestaurantContainer>
                <Photos Information={resInfo}/>
                <RestaurantPost className="aPost" Information={resInfo} />
            </RestaurantContainer>
        </div>
    )
};

const RestaurantContainer = styled.div`
margin: 0 0 150px 0;
`;