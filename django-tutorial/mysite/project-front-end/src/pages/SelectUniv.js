import React, { useEffect } from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

import { Container } from 'react-bootstrap';
import univData from '../json/univDButf.json';

export default function SelectUniv(){
    useEffect(()=>{window.scrollTo(0, 0)}, []);
    
    return(
        <Container>
            <UniversityWrap>
                <h1>관심있는 대학가의 맛집을 알려드립니다!</h1>
                <UniversityList>
                {
                    univData.university.map((elem, idx)=>{
                        return(
                            <Link to={`/univ/${idx}`}>{elem.name}</Link>
                        );
                    })
                }
                </UniversityList>
            </UniversityWrap>
        </Container>
    );
}

//styled components

const UniversityWrap = styled.div`
    width: 100%;
    border-top: 1px solid gray;
    color: black;
    padding: 40px;
    margin: 0 auto;
    margin: 2vh 0 5vh 0;
    text-align: center;
    overflow: hidden;

    & > h1{
        margin: 20px 0 20px 0;
    }
`;

const UniversityList = styled.div`
    margin: 0 auto;
    padding: 15px;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    user-select: none;

    gap: 10px;
    & > a{
        width:calc((100% / 3) - 10px);
        text-align: center;
        height: 50px;
        text-decoration: none;
        color: black;
        line-height: 45px;
        font-size: 1.2rem;
        border: 4px solid orange;
        border-radius: 40px;
        font-weight: bold;

        white-space: nowrap;
        text-overflow: hidden;

        padding: 0 20px 0 20px;
        cursor: pointer;
        opacity: 0.5;
        transition: 0.3s;
    }
    & > a:hover{ opacity: 1.0; }
    & > a:visited{ text-decoration: none; }

`;
