import React from 'react';
import styled from 'styled-components';

import Header from '../component/Header';
import UnivLogo from '../component/UniversityLogo';
import { useHistory, Link } from 'react-router-dom';

import { Container, Card, CardGroup } from 'react-bootstrap';


export default function Main(){
    let history = useHistory();

    return(
        <Container>
            <Header />
                <FamousWrap>
                    <h1>인기 대학가 TOP 3</h1>
                    <h5>가장 인기있는 대학가의 맛집을 확인해보세요!</h5>
                    <div>
                    <CardGroup style={{cursor: 'pointer'}}>
                        <Card onClick={()=>history.push('/univ/20')}>
                            <UnivLogo
                                name='hongik'
                                style={
                                    {
                                        width: '150px',
                                        height: '150px',
                                        padding: '20px'
                                    }
                                }
                            />
                            <Card.Body>
                            <Card.Title>홍익대학교</Card.Title>
                            <Card.Text style={{wordBreak:'keep-all'}}>
                                서울특별시 마포구에 위치한 학교로
                                그 주변 일대(일명 '홍대거리')에는
                                수많은 핫플레이스들이 즐비해있습니다
                                서울을 대표하는 번화가 홍익대학교의
                                맛집을 자맛추에서 찾아보세요!
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card onClick={()=>history.push('/univ/22')}>
                            <UnivLogo
                                name='konkuk'
                                style={
                                    {
                                        width: '150px',
                                        height: '150px',
                                        padding: '20px'
                                    }
                                }
                            />
                            <Card.Body>
                            <Card.Title>건국대학교</Card.Title>
                            <Card.Text style={{wordBreak:'keep-all'}}>
                                서울특별시 광진구에 위치한 학교로
                                젊은 트렌드를 대표하는 서울 대학 상권 중 하나입니다
                                홍대가 서울 서부권의 상징이라면
                                건대는 서울 동부권의 상징이라고 할 수 있습니다
                                건국대학교 주변 맛집을 자맛추에서 찾아보세요!
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card onClick={()=>history.push('/univ/8')}>
                            <UnivLogo
                                name='yonsei'
                                style={
                                    {
                                        width: '150px',
                                        height: '150px',
                                        padding: '20px'
                                    }
                                }
                            />
                            <Card.Body>
                            <Card.Title>연세대학교</Card.Title>
                            <Card.Text style={{wordBreak:'keep-all'}}>
                                서울특별시 서대문구에 위치한 학교로
                                학교 주변 일대는 오래전부터 서울 서부권을 대표하는 상권을 지키고 있습니다
                                연세대학교 주변의 대표 맛집을 자맛추에서 찾아보세요!
                                
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </CardGroup>
                    </div>
                </FamousWrap>

                <LinkWrap>
                    <h1>대학별 맛집</h1>
                    <h5>각 대학별 인근 맛집을 알려드립니다</h5>
                    <Link to='/univ'>지금 확인하러 가기</Link>
                </LinkWrap>
                <LinkWrap>
                    <h1>맛집 랭킹</h1>
                    <h5>자맛추에서 가장 핫한 맛집을 지금 확인해보세요!</h5>
                    <Link to='/places/rank'>지금 확인하러 가기</Link>
                </LinkWrap>
                <LinkWrap>
                    <h1>리뷰 랭킹</h1>
                    <h5>자맛추에서 가장 많은 공감을 받은 리뷰를 확인해보세요!</h5>
                    <Link to='/hotpost'>지금 확인하러 가기</Link>
                </LinkWrap>
        </Container>
    );
}


//styled components


const FamousWrap = styled.div`
    width: 100%;
    overflow: hidden;
    border-top: 1px solid rgb(219,219,219);
    color: black;
    margin: 0 auto;
    margin-top: 10px;
    padding: 40px 0 20px 0;
    text-align: center;

    & > h1{
        margin: 5px;
        
    }
    & > h5{
        margin: 5px;
    }

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 5%;
    }

    & img{
        margin: 0 auto;
    }
`;

const LinkWrap = styled.div`
    min-width: 100%;
    border-top: 1px solid rgb(219,219,219);
    color: black;
    margin: 0 auto;
    padding: 40px 0 40px 0;
    text-align: center;
    user-select: none;

    & > h5{
        margin-bottom: 20px;
    }
    & > a{
        margin: 0 auto;
        width: 300px;
        height: 80px;
        padding: 10px 30px 10px 30px;
        border-radius: 50px;
        background: orange;
        opacity: 0.5;
        transition: 0.3s;
        font-size: 1.2em;
        line-height: 60px;
        cursor: pointer;
        text-decoration: none;
        color: white;
    }

    & > a:hover{
        opacity: 1.0;
    }
    & > a:visited{
        text-decoration: none;
    }

    &:last-child{
        margin-bottom: 120px;
    }
`;