import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {ToggleButton, ToggleButtonGroup, Button, Modal} from 'react-bootstrap';

import {MdRiceBowl} from "react-icons/md";
import {GiSushis, GiNoodles} from "react-icons/gi";
import {FaHamburger, FaGlobeAsia, FaCoffee, FaBeer} from "react-icons/fa";
import {BiDish} from "react-icons/bi";

export default function FilterModal(props){
    const [sortType, setSortType] = useState(props.default.sorting ?? '1');  //정렬기준
    const [category, setCategory] = useState(props.default.category ?? []);  //음식종류
    const handleChange = (val) => setCategory(val);

    const sortRadios = [
      { name: 'latest', title: '최신순', value: '1'},
      { name: 'nearest', title: '가까운순', value: '2'},
      { name: 'best', title: '좋아요순', value: '3'}
    ]

    const Menu = [
      {value: 1, name: "한식", icon: <MdRiceBowl/>},
      {value: 2, name: "중식", icon: <GiNoodles/>},
      {value: 3, name: "일식", icon: <GiSushis/>},
      {value: 4, name: "양식", icon: <FaHamburger/>},
      {value: 5, name: "세계", icon: <FaGlobeAsia/>},
      {value: 6, name: "뷔페", icon: <BiDish/>},
      {value: 7, name: "카페", icon: <FaCoffee/>},
      {value: 8, name: "술집", icon: <FaBeer/>}
    ]

    useEffect(()=>{

    }, [])

    return (
        <>
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{userSelect: 'none'}}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                검색 필터
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <h4>정렬</h4>
              <SortSelectWrap>
                {
                  sortRadios.map((elem, idx)=>{
                    return(
                      <>
                        <input
                          type="radio"
                          name='sorting'
                          id={elem.name}
                          value={elem.value}
                          checked={elem.value === sortType}
                          onChange={()=>{}}
                        />
                       <label for="latest" onClick={()=>setSortType(elem.value)}>{elem.title}</label>
                      </>              
                    );
                  })
                }
              </SortSelectWrap>
              <p></p>
              <h4>음식종류</h4>
            
              <FoodSelectWrap>
                <ToggleButtonGroup type="checkbox" value={category} onChange={handleChange}>
                    {
                      Menu.map((elem)=>{
                        return(
                            <ToggleButton
                              id={"food"+elem.value}
                              value={elem.value}
                              variant="outline-warning"
                            >
                              {elem.icon}<p>{elem.name}</p>
                            </ToggleButton>
                        );
                      })
                    }
                </ToggleButtonGroup>
              </FoodSelectWrap>
            </Modal.Body>

            <Modal.Footer>
              <div style={{flexGrow: '1', textAlign: 'start'}}>
                <Button
                  variant="light"
                  onClick={()=>{
                    props.onHide();
                    setSortType('1');
                    setCategory([]);
                    const filter = {
                      sorting: '1',
                      category: [],
                    }
                    window.localStorage.setItem('jmt.filter', JSON.stringify(filter));
                    props.onFilter(filter);
                  }}
                >
                  초기화
                </Button>
              </div>

              <Button
                variant="warning"
                onClick={()=>{
                  props.onHide();
                  const filter = {
                    sorting: sortType,
                    category: category,
                  }
                  window.localStorage.setItem('jmt.filter', JSON.stringify(filter));
                  props.onFilter(filter);
                }}
              >
                적용
              </Button>
              <Button variant="light" onClick={props.onHide}>닫기</Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}


const SortSelectWrap = styled.p`
  display: flex;
  justify-content: space-around;
  user-select: none;
  
  font-size: 25px;
  text-align: center;
  margin: 0 auto;

  & > input[type="radio"]{
    display: none;
  }

  & > label{
    padding: 0 20px 0 20px;
    border: 4px solid;
    border-radius: 40px;
    transition: 0.3s;
    opacity: 0.4;
    cursor: pointer;
  }
  
  & > input[type="radio"]:checked + label{
    color: orange;
    opacity: 1.0;
  }
`;

const FoodSelectWrap = styled.div`
    
    & > div{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      user-select: none;
      gap: 10px;

      & label{
        width:calc((100% / 4) - 10px);
        height: 2.5em;
        transition: 0.3s;
        opacity: 0.4;
        cursor: pointer;
        background: transparent;
        color: gray;
        font-size: 75px;
      }
      & p{
        font-size: 0.3em;
      }

      & input[class='btn-check'] + label{
        background: transparent;
        border: 0;
        color: gray;
        opacity: 1.0;
      }


    }
`;