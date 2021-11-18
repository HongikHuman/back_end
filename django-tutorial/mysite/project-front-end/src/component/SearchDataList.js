import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function SearchDataList({ filteredData }) {
    console.log(filteredData);
    return (
      <DataList>
        {filteredData.length === 0 ? (
            <NoResult>검색결과가 없습니다.</NoResult>
        ) : (
            <SearchResult>
                {filteredData.map(d => {
                    return (
                        <div>
                            <Li key={d.key}>
                                <div>
                                    <div style={{fontSize: "15px"}}>{d.name}</div>
                                </div>
                                <Link to={`/product/search?q=${d.key}`}></Link>
                            </Li>
                        </div>
                    );
                })}
            </SearchResult>
        )}
      </DataList>
    );
};

const DataList = styled.div`
  width: 100%;
  border-top: 1px solid lightgray;
  background-color: white;
`;

const NoResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: rgb(154, 154, 158);
`;

const SearchResult = styled.div`
  padding: 16.5px 0px 46px;
`;

const Li = styled.div`
  display: flex;
  padding: 6.5px 20px;
  font-size: 11px;
  border-bottom: 1px solid rgb(235, 235, 235);
  line-height: 1.5;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 8px;
`;