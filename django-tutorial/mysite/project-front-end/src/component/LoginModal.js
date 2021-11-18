import React, { useState } from 'react';
import styled from 'styled-components';
import {Form, Button, Modal} from 'react-bootstrap';
import { MdAccountBox, MdOutlineLock } from 'react-icons/md';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function LoginModal(props){
    const [formData, setFormData] = useState();
    const handleChange = (e)=>{
      setFormData({...formData, [e.target.id]:e.target.value});
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      axios.get(`http://localhost:8888/users/${formData.id}`)
      .then(res=>{
          console.log(res.data);
      })     //response
      .catch((err)=>{console.log(`error: ${err}`)})     //onError
      .then(data=>`data: ${console.log(data)}`);     //always
    }

    //아직 구현안됨

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
                로그인
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
            
              <LoginForm>
                  <h2>자맛추의 회원이 되어보세요!</h2>
                  <Form>
                    
                    <AccountWrap>
                        <Form.Group className="first-child" bsPrefix={{ margin: "0"}} controlId="username" onChange={(e)=>handleChange(e)}>
                            <span><MdAccountBox/></span>
                            <Form.Control type="email" placeholder="아이디"/>
                        </Form.Group>
                        <Form.Group bsPrefix={{margin: "0"}} controlId="password"  onChange={(e)=>handleChange(e)}>
                            <span><MdOutlineLock/></span>
                            <Form.Control type="password" placeholder="비밀번호" />
                        </Form.Group>
                    </AccountWrap>
                  </Form>
                  <ButtonWrap>
                      <Link to="/register" onClick={props.onHide}><Button>회원가입</Button></Link>
                      <Button type="submit" onClick={(e)=>handleSubmit(e)}>로그인</Button>
                  </ButtonWrap>
              </LoginForm>
            </Modal.Body>
          </Modal>
        </>
      );
}


const fetchLogin = async ({ username, password }) => {
  await axios.get("http://localhost:8888/users", {id: username, password: password})
  .then((response)=>{
    console.log(`res: ${response}`)
  })
  .catch((err)=>{
    console.log(`error: ${err}`)
  })
  .then((always)=>{
    console.log(`always: ${always}`)
  });
};

const LoginForm = styled.div`
    margin: 0 auto;
    padding: 15px;
    width: 95%;
    text-align: center;


    & h2{
       margin: 10px 0 30px 0;
       font-size: 2em;
    }
    & h4{
        margin-top: 30px;
        font-size: 1.2em;
        
    }
`;

const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;

    & > *{
        
        margin: 10px;
    }
`;

const AccountWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin : 0 auto;

    & .first-child{
        border-bottom: 0;
    }
    
    & > div{
        display: flex;
        border: 1px solid grey;
        width : 90%;
        max-width: 500px;
        
        & > span{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            font-size: 30px;
            border-right: 1px solid grey;
        }
      
        & > input{
            height: 50px;
            border-left: 0;
            flex-grow: 1;
            border: 0;
        }
    }

`;