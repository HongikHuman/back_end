import React, { useState } from 'react'
import styled from 'styled-components';

export default function Info ({ content, category }) {
    const [contents, setContents] = useState(content);
    const [categorys, setCategory] = useState(category);

    return (
        <InfoContainer>
            <InfoBox>
                <InfoTH>{categorys[0]}</InfoTH>
                <InfoTD>{contents.address}</InfoTD>
            </InfoBox>
            <InfoBox>
                <InfoTH>{categorys[1]}</InfoTH>
                <InfoTD>{contents.tel}</InfoTD>
            </InfoBox>
            <InfoBox>
                <InfoTH>{categorys[2]}</InfoTH>
                <InfoTD>{contents.foodtype}</InfoTD>
            </InfoBox>
        </InfoContainer>
    );
};

const InfoContainer = styled.table `
    display: flex;
    flex-direction: column;
`;

const InfoBox = styled.tr`
    display: flex;
    width: 400px;
    height: 35px;

    & > td > ul {
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0
    }

    & > td > ul > li {
        padding: 5px 0 0 0;
        display: flex;
        justify-content: space-between;
    }
`;

const InfoTH = styled.th`
    text-align: left;
    width: 110px;
    height: 48px;
    padding: 5px 10px;
    color: rgb(149, 149, 149);
`;

const InfoTD = styled.td`
    padding: 5px 0 0 0;
`;