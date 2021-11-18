import React, { useState } from 'react';
import styled from 'styled-components';
import {Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import univData from '../json/univDButf.json';

export default function SelectUnivModal(props){

    return (
        <>
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{fontFamily: 'Noto Sans CJK KR', fontStyle: 'normal'}}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                학교 선택
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
            
              <UnivList>
                {
                    univData.university.map((elem, idx)=>{
                        return(
                            <Link onClick={props.onHide} to={`/univ/${idx}`}>{elem.name}</Link>
                        )
                    })
                }
              </UnivList>
            </Modal.Body>
          </Modal>
        </>
      );
}

const UnivList = styled.div`
    margin: 0 auto;
    padding: 15px;
    width: 95%;
    display: flex;
    flex-wrap: wrap;

    gap: 10px;
    & > a{
        width:calc((100% / 3) - 10px);
        text-align: center;
        height: 40px;
        text-decoration: none;
        color: black;
        line-height: 30px;
        font-size: 0.9rem;
        border: 4px solid orange;
        border-radius: 40px;
        font-weight: bold;

        white-space: nowrap;
        text-overflow: hidden;

        padding: 0 20px 0 20px;
        cursor: pointer;
        opacity: 0.6;
        transition: 0.3s;
    }
    & > a:hover{ opacity: 1.0; }
    & > a:visited{ text-decoration: none; }
    


    & h2{
       margin: 10px 0 30px 0;
       font-size: 2em;
    }
    & h4{
        margin-top: 30px;
        font-size: 1.2em;
        
    }
`;