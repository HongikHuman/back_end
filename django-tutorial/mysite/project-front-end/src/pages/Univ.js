import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Spinner, Button, Card, Col, Row, Pagination } from 'react-bootstrap';
import { GrFilter } from "react-icons/gr";
import { useParams, Link } from 'react-router-dom';

import FilterModal from '../component/FilterModal';
import SelectUnivModal from '../component/SelectUnivModal';
import KakaoMap from '../component/KakaoMap';
import axios from 'axios';

import univData from '../json/univDButf.json';

//npx json-server ./src/json/restaurantWgs84.json --watch --port 8888
export default function Univ(){

    const [elements, setElements] = useState([]); //식당 요소 jsx 객체

    const { univIndex } = useParams(); //대학교 이름 params
    const [targetUniv, setTargetUniv] = useState(
        univData.university[univIndex] ?? {name:'null', lng: 0, lat:0}
    );

    const [filterModalShow, setFilterModalShow] = useState(false); //모달창 상태
    const [selectUnivModalShow, setSelectUnivModalShow] = useState(false); //모달창 상태

    const [db, setDb] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentData, setCurrentData] = useState([]);

    
    const getFilter = ()=>{
        return(
            JSON.parse(window.localStorage.getItem('jmt.filter'))
            ?? {
            
                /*
                    sorting - 1:최신순, 2:가까운순, 3:좋아요순
                    category - []: 전체, [1, 2, 3, ...]: 해당 음식 종류만
                */
                sorting: '1',
                category: [],
            }
        );
    }
    const [filter, setFilter] = useState(getFilter());
    
    //필터링 요소
    useEffect(()=>{
        console.log(filter);
    }, [filter])


    const fetchData = async ()=>{
        await axios.get('http://localhost:3000/sheet1')
        .then((res)=>{
            setMaxPage(Math.floor((res.data.length -1) / viewNum) + 1);
            setDb(res.data);
            setFilter(getFilter());
            setFilteredData(res.data);
        })
        .catch((err)=>console.log(err));
    }

    useEffect(()=>{ fetchData(); }, []);

    useEffect(()=>{
        setTargetUniv(univData.university[univIndex] ?? {name:'null', lng: 0, lat:0});
    }, [univIndex]);

    
    useEffect(()=>{
        let processedData = [];
        if(filter.category.length < 1){
            processedData = db;
        }
        else{
            if(filter.category.indexOf(1)> -1)
                processedData = processedData.concat(db.filter((item)=>item.category==="한식"));
            if(filter.category.indexOf(2)> -1)
                processedData = processedData.concat(db.filter((item)=>item.category==="중국식"));
            if(filter.category.indexOf(3)> -1)
                processedData = processedData.concat(db.filter((item)=>item.category==="일식"));
            if(filter.category.indexOf(4)> -1)
                processedData = processedData.concat(db.filter((item)=>item.category==="경양식"));
            if(filter.category.indexOf(5)> -1)
                processedData = processedData.concat(db.filter((item)=>item.category==="외국음식전문점(인도태국등)"));
            if(filter.category.indexOf(6)> -1)
                processedData = processedData.concat(db.filter((item)=>item.category==="뷔페식"));
            if(filter.category.indexOf(7)> -1)
                processedData = processedData.concat(db.filter((item)=>item.category==="까페"));
            if(filter.category.indexOf(8)> -1)
                processedData = processedData.concat(db.filter((item)=>item.category==="호프/통닭"));
        }
        setMaxPage(Math.floor((processedData.length-1) / viewNum) + 1);
        setPageNum(1);
        setFilteredData(processedData);
    }, [filter]);
   
    useEffect(()=>{
        renderElements(filteredData);
        renderPagination(1);
    }, [filteredData]);
 

    //Pagination
    const [pageNum, setPageNum] = useState(1);    //현재 페이지
    const [viewNum, setViewNum] = useState(12);   //한번에 보여줄 요소 개수 기본 12
    const [maxPage, setMaxPage] = useState(1); //최대 페이지
    const [pagination, setPagination] = useState([]); //페이지네이션 jsx 객체

    useEffect(()=>{
        const begin = Math.floor((pageNum-1) / 5) * 5 + 1;
        renderElements(filteredData);
        renderPagination(begin);
    }, [pageNum]);

    const renderPagination = (begin)=>{
        if(begin < 1) begin = 1;
        
        let item = [];
        for(let i=begin; i<begin+5; ++i){
            if(i > maxPage) break;

            item.push(
                <Pagination.Item
                    key={i}
                    active={i === pageNum}
                    onClick={()=>{setPageNum(i);}}
                >
                    {i}
                </Pagination.Item>
            );
        }
        item.push(
            <>
            <Pagination.Next onClick={()=>setNextPagination()}/>
            <Pagination.Last onClick={()=>setPageNum(maxPage)}/>
            </>
        )
        setPagination(item);
        window.scrollTo(0, 0);
    }
    
    const setNextPagination = ()=>{
        const begin = Math.floor((pageNum-1) / 5) * 5 + 1;
        if(begin + 5 >= maxPage) setPageNum(maxPage);
        else setPageNum(begin+5);
    }

    const setPrevPagination = ()=>{
        const begin = Math.floor((pageNum-1) / 5) * 5 + 1;
        if(begin - 5 < 1) setPageNum(1);
        else setPageNum(begin-5);
    }
    //Pagination


    const renderElements = (ARRAY)=>{
        let item = [];
        let data = [];

        if(ARRAY.length < 1){
            item.push(
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            );
            setElements(item);
          return;
        } //loading spinner

        const BEGIN = (pageNum-1) * viewNum;
        const END = pageNum * viewNum;

        const LEN = ARRAY.length < END ? ARRAY.length : END;

        ARRAY.forEach((elem, idx)=>{
            if(BEGIN <= idx && idx < LEN){
                data.push({index: elem.index, title: elem.title, x: elem.xcoord, y: elem.ycoord});
                item.push(
                <Col>
                    <Card style={{margin: "0 auto", width: "300px", userSelect:'none'}}>
                        <Link to={`/places/${elem.index}`} style={{width: '300px', height:'300px', position: 'absolute', zIndex: '3'}}/>
                        <Card.Img style={{width: "300px", height:"250px"}} variant="top" src={null}/>
                        <Card.Body>

                        <Card.Title>{elem.title}</Card.Title>
                        <Card.Text>
                            {elem.road_address}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>);
            }
        });
        setCurrentData(data);
        setElements(item);
    }


    return (
        <Container className="container">
            <KakaoMap
                univ={targetUniv}
                restaurants={currentData}
            />

            <FilterModal
                show={filterModalShow}
                onHide={() => setFilterModalShow(false)}
                default={filter}
                onFilter={(p)=>setFilter(p)}
            />
            <SelectUnivModal
                show={selectUnivModalShow}
                onHide={() => setSelectUnivModalShow(false)}
            />  

            <HeaderWrap>
                <UnivSelectWrap>
                    <Button variant="light" onClick={()=>setSelectUnivModalShow(true)}>
                        {targetUniv.name ? targetUniv.name : 'null'}
                    </Button>
                    <p>주변 맛집입니다</p>
                </UnivSelectWrap>

                <OptionWrap>
                    <button onClick={() => setFilterModalShow(true)}><GrFilter/></button>
                </OptionWrap>
            </HeaderWrap>


            <ArticleWrap>
                <Row xs={2} md={3} className="g-4">
                    {elements}
                </Row>
            </ArticleWrap>


            <PaginationWrap>
                <Pagination>
                    <Pagination.First onClick={()=>setPageNum(1)}/>
                    <Pagination.Prev onClick={()=>setPrevPagination()}/>
                    {pagination}
                </Pagination>
            </PaginationWrap>
        </Container>
    );
};


//styled components

const Container = styled.div`
    margin: 0 auto;
    margin-bottom: 150px;
`;

const HeaderWrap = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > *{
        margin: 0 auto;
    }
`;

const UnivSelectWrap = styled.div`
    margin: 0;
    display: flex;
    align-items: center;

    & > button{
        width: 15em;
        opacity: 0.7;
        font-size: 1em;
        outline: 1px solid gray;
        font-weight: bold;
        transition: 0.3s;
    }
    & > button:hover{
        opacity: 1;
    }

    & > p{
        margin: 5px;
    }

`;

const OptionWrap = styled.div`
    width: 50px;
    height: 50px;
    margin-right: 5px;

    & > button{
        background: transparent;
        font-size: 25px;
        opacity: 0.4;
        border-radius: 5px;

        &:hover{
            opacity: 1.0;
        }
    }
`;

const ArticleWrap = styled.div`
    font-size: 10px;
    margin: 0 auto;
`;

const PaginationWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;