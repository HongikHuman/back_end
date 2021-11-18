import React from 'react';
import styled from 'styled-components';
import UserInfoBox from '../component/UserInfoBox';

import {Form, ListGroup, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MyPage(props){
    const myRouter = ()=>{
        if(props.link === 'edit'){
            return (<Edit/>);
        }
        else return (<><h1>만드는 중</h1></>);
    }

    return (
        <Container className="container">
            {/* <UserInfoBox /> */}
            <MenuList>
                <ListGroup as="ul" defaultActiveKey="edit">
                    <ListGroup.Item as="li" action href="edit" className="my-link">
                        <Link to="/my/edit">내 정보</Link>
                    </ListGroup.Item>

                    <ListGroup.Item as="li" action href="post" className="my-link">
                        <Link to="/my/post">내 게시글</Link>
                    </ListGroup.Item>

                    <ListGroup.Item as="li" action href="reply" className="my-link">
                        <Link to="/my/reply">내 댓글</Link>
                    </ListGroup.Item>

                    <ListGroup.Item as="li" action href="likes" className="my-link">
                        <Link to="/my/likes">좋아요한 게시글</Link>
                    </ListGroup.Item>

                    <ListGroup.Item as="li" action href="logout" className="my-link">
                        <Link to="/logout">로그아웃</Link>
                    </ListGroup.Item>
                </ListGroup>
            </MenuList>
            <Prime>
                {myRouter()}
            </Prime>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: top;
    margin: 0 auto;
    margin-bottom: 150px;

    
    & .my-link{
        display: block;
        padding: 0;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: black;
    }
    & .my-link > a{
        display: block;
        padding: 0;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        padding: 8px 15px 8px 15px;
        text-decoration: none;
        color: black;
    }
`;

const MenuList = styled.div`
    min-width: 120px;
`;

const Prime = styled.div`
    padding: 20px;
    flex-grow: 1;
    border: 1px solid grey;
`;

const MyInfo = styled.div`

`;


const Edit = () => {
    return(
        <>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>아이디</Form.Label>
                <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>비밀번호</Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalNickname">
                <Form.Label column sm={2}>닉네임</Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="닉네임" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalNickname">
                <Form.Label column sm={2}>학교인증</Form.Label>
                <Col sm={10}>
                    <Form.Text>인증이 완료되었습니다</Form.Text>
                </Col>
            </Form.Group>
        </>
    );
}