import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import univData from '../json/univDButf.json';

export default function Footer() {

    return (
        <FooterWrap>
            <InnerWrap>
                <div className="zmc-logo">
                    <Link to="/" className="title" onClick={()=>window.scrollTo(0, 0)}>
                        자맛추
                    </Link>
                    <p className="subtitle">자, 여기 맛집 추천!</p>
                </div>

                <div className="sitemap-location-keywords">
                    <div className="keyword_wrap">
                        <span className="keyword">자맛추 지원 학교</span>
                        <br /><br />
                        {univData.university.map((univ, idx) => {
                            return (
                                <span className="keyword" key={idx}>
                                    {univ.name}
                                </span>
                            );
                        })}
                    </div>
                </div>

                <div className="language-copyrights">
                    <small>
                        <p> 
                            ㈜ 고스락컴퍼니<br />서울특별시 마포구 상수동 와우산로 94<br />대표이사: 채승희<br />사업자 등록번호: 02-320-1114 <span to="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=7428600224" target="_blank">[사업자정보확인]</span><br />고객센터: 02-123-4567<br /><br />
                        <span className="copyrights">© 2021 Zamatchew Co., Ltd. All rights reserved.</span>
                        </p>
                    </small>
                </div>
            </InnerWrap>
        </FooterWrap>
    );
};

const FooterWrap = styled.div`
    position: relative;
    background-color: #3e3e3e;
    text-align: left;
    display: block;
`;

const InnerWrap = styled.div`
    margin: 0 auto;
    padding-top: 65px;
    min-height: 430px;
    max-width: 1200px;
    position: relative;

    & .zmc-logo {
        display: inline-block;
        margin-right: 168px;
        vertical-align: top;
        margin-bottom: 30px;
        padding-top: 15px;
    }

    & .zmc-logo .title{
        text-decoration: none;
        color: white;
        font-size: 70px;
        font-family: 'NanumAGiSaRangCe';
    }

    & .zmc-logo .subtitle {
        display: block;
        position: relative;
        margin-top: 10px;
        margin-left: 5px;
        padding-top: 15px;
        font-size: 0.875rem;
        color: #6a6a6a;
    }
    
    & .sitemap-location-keywords {
        margin-bottom: 30px;
        padding-top: 15px;
        border-top: 1px solid #6a6a6a;
        color: #9b9b9b;
    }

    & .sitemap-location-keywords .keyword_wrap {
        font-size: 15px;
        line-height: 28px;
        white-space: prewrap;
    }

    & .sitemap-location-keywords .keyword_wrap .keyword {
        color: #9b9b9b;
        padding: 0 10px 0 10px;
    }

    & .language-copyrights {
        position: relative;
        border-top: 1px solid #6a6a6a;
        padding: 36px 0 42px 0;
    }

    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    & .language-copyrights  small {
        font-size: 0.875rem;
        line-height: 22px;
        display: block;
        color: #9b9b9b;      
    }

    & small a {
        font-weight: bold;
        text-decoration: underline;
        color: #9b9b9b;
    }
`;

