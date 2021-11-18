import React from 'react';
import styled from 'styled-components';
export default function TextDivider(props){
    return(
        <TextDividerWrap>
            <p/>
            <span>{props.text}</span>
            <p/>
        </TextDividerWrap>
    )
}

const TextDividerWrap = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 30px 0 30px 0;

    & > span{
        flex-grow: 1;
    }
    & > p{
        border: 1px solid grey;
        height: 1px;
        margin: 20px 0 20px 0;
        flex-grow: 5;
    }
`;