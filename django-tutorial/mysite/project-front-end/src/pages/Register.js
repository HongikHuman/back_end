import React, { useState } from 'react';
import styled from 'styled-components';

import {Form, Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

export default function Register(){
    const history = useHistory();

    const [formData, setFormData] = useState();
    const handleChange = (e)=>{
        if(e.target.id !== 'passwordConfirm')
            setFormData({...formData, [e.target.id]:e.target.value});

        console.log(formData);
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const post = {
            "id": formData.email,
            "password": formData.password,
            "name": formData.name,
            "phone": formData.phone,
            "nickname": formData.nickname,
            "university": formData.university,
        }
        axios.post('http://localhost:8888/users', post)
        .then(res=>{
            console.log(`response: ${res}`);
            alert("회원가입이 완료되었습니다");
            history.push('/');
        })     //response
        .catch((err)=>{console.log(`error: ${err}`); alert("회원가입 실패");})     //onError
        .then(data=>`data: ${console.log(data)}`);     //always
    }


    return (
        <Container className="container">
            <LoginForm>
                <h2>회원가입</h2>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="email" onChange={(e)=>handleChange(e)}>
                        <Form.Label column sm={2}>아이디</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="아이디(이메일)"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="password" onChange={(e)=>handleChange(e)}>
                        <Form.Label column sm={2}>비밀번호</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="비밀번호" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="passwordConfirm">
                        <Form.Label column sm={2}>비밀번호 확인</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="비밀번호 확인" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="name" onChange={(e)=>handleChange(e)}>
                        <Form.Label column sm={2}>이름</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="이름" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="phone" onChange={(e)=>handleChange(e)}>
                        <Form.Label column sm={2}>전화번호</Form.Label>
                        <Col sm={10}>
                        <Form.Control type="phone" placeholder="전화번호" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="nickname" onChange={(e)=>handleChange(e)}>
                        <Form.Label column sm={2}>별명</Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" placeholder="별명" />
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3" controlId="university" onChange={(e)=>handleChange(e)}>
                        <Form.Label column sm={2}>대학교</Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" placeholder="대학교" />
                        </Col>
                    </Form.Group>     
                </Form> 
                <Button variant="primary" type="submit" onClick={(e)=>handleSubmit(e)}>회원가입</Button>
            </LoginForm>
        </Container>
    );
};

//임시 로그인 서버 띄우는 방법 : 새 터미널 열어서 다음과 같이 입력
//npx json-server ./src/json/tempLogin.json --watch --port 8888

const Container = styled.div`
    margin: 0 auto;
    margin-bottom: 150px;
`;

const LoginForm = styled.div`
    margin: 0 auto;
    padding: 15px;
    width: 90%;
    border: 1px solid grey;
    border-radius: 10px;

    & form{
        max-width: 700px;
        margin: 0 auto;
    }
    & h2{
       margin: 30px 0 30px 0;
       font-size: 2em;
    }
    & h4{
        margin-top: 30px;
        font-size: 1.2em;
        
    }
`;