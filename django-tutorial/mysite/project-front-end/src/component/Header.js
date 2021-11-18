import React from "react";
import styled from 'styled-components';
import TimeSearchBanner from './TimeSearchBanner';

export default function Header() {
  return (
    <div className="section" id="home">
      <Container>
        <div className="header-wrapper">
          <TimeSearchBanner />
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
    & .header-wrapper {
        height: 700px;
        background-image: url(https://src.hidoc.co.kr/image/lib/2020/11/9/1604911318873_0.jpg);
        background-size: cover;
    }
    
    & .header-wrapper > h1 {
        color: white;
    }
`;