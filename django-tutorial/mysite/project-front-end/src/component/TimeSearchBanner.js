import React from 'react';
import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
import Fade from "react-reveal/Fade";
import GeoLocation from './GeoLocation';
import { Link } from 'react-router-dom';

const times = ['10분', '20분', '30분', '40분', '50분', '60분', '70분', '80분', '90분', '100분', '110분', '120분']

export default function TimeSearchBanner() {
    return (
        <BannerContainerWrap>
            <SelectTimeWrap>
                <Fade bottom>
                    <h1>바쁜 당신을 위한 타임어택 맛집 추천!</h1>
                </Fade>
                <div className="time-select">
                    <div className="time-selection">
                        <Dropdown
                            placeholder="시간을 선택해주세요"
                            className="selection"
                            options={times}
                            value="one"
                            onChange={(value) => console.log('change!', value)}
                            onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
                            onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                            onOpen={() => console.log('open!')}
                        />
                    </div>
                    <GeoLocation />
                    <div className="find-button">
                        <Link className="btn-link" to="/time-search/list"><button type="button" className="btn btn-dark">맛집 보러가기 <BsArrowRight /></button></Link>
                    </div>
                </div>
            </SelectTimeWrap>
        </BannerContainerWrap>
    );
};

const BannerContainerWrap = styled.div`
    padding: 30px;
    display: inline-block;
`;

const SelectTimeWrap = styled.div`
    & > h1 {
        color: white;
        margin: 60px 0 40px 20px;
        font-size: 65px;
        font-weight: bold;
        text-align: left;
    }
    
    & .time-select {
        background-color: rgb(203,88,20);
        height: 400px;
        padding: 50px;
    }

    & .time-select .selection {
        font-size: 28px;
    }

    & .time-select .find-button {
        margin-top: 100px;
        float: right;
    }
    
    & .time-select .find-button .btn-link > button {
        width: 200px;
        height: 50px;
        font-size: 20px;
        background-color: rgb(104, 70, 50);
        border: none;
    }
`;