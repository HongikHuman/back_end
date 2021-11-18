import React, { useState, useEffect } from "react";
import SearchDataList from "./SearchDataList";
import styled from "styled-components";
import { BiSearch } from 'react-icons/bi';
import Offcanvas from 'react-bootstrap/Offcanvas'

const restaurants = [
    {key: 1, univ: "홍익대학교", name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', likes: 1232, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {key: 2, univ: "홍익대학교", name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', likes: 1045, authenticated: true,  img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {key: 3, univ: "서울대학교", name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', likes: 978, authenticated: false, img: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {key: 4, univ: "홍익대학교", name: '치치', address: '서울특별시 마포구 서교동 360-19', likes: 850, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {key: 5, univ: "홍익대학교", name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', likes: 799, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {key: 6, univ: "서울대학교", name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시 KR', likes: 729, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {key: 7, univ: "홍익대학교", name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', likes: 603, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {key: 8, univ: "연세대학교", name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', likes: 505, authenticated: true, img: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {key: 9, univ: "홍익대학교", name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', likes: 477, authenticated: false, img: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {key: 10, univ: "서울대학교", name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', likes: 230, authenticated: false, img: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},    
    
    {key: 11, univ: "서울대학교", name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', likes: 1232, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {key: 12, univ: "홍익대학교", name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', likes: 1045, authenticated: true,  img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {key: 13, univ: "서울대학교", name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', likes: 978, authenticated: false, img: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {key: 14, univ: "홍익대학교", name: '치치', address: '서울특별시 마포구 서교동 360-19', likes: 850, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {key: 15, univ: "연세대학교", name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', likes: 799, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {key: 16, univ: "홍익대학교", name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시 KR', likes: 729, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {key: 17, univ: "홍익대학교", name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', likes: 603, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {key: 18, univ: "서울대학교", name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', likes: 505, authenticated: true, img: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {key: 19, univ: "홍익대학교", name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', likes: 477, authenticated: false, img: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {key: 20, univ: "홍익대학교", name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', likes: 230, authenticated: false, img: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},    

    {key: 21, univ: "서울대학교", name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', likes: 1232, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {key: 22, univ: "홍익대학교", name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', likes: 1045, authenticated: true,  img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {key: 23, univ: "홍익대학교", name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', likes: 978, authenticated: false, img: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {key: 24, univ: "서울대학교", name: '치치', address: '서울특별시 마포구 서교동 360-19', likes: 850, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {key: 25, univ: "홍익대학교", name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', likes: 799, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {key: 26, univ: "연세대학교", name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시 KR', likes: 729, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {key: 27, univ: "서울대학교", name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', likes: 603, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {key: 28, univ: "홍익대학교", name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', likes: 505, authenticated: true, img: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {key: 29, univ: "연세대학교", name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', likes: 477, authenticated: false, img: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {key: 30, univ: "홍익대학교", name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', likes: 230, authenticated: false, img: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},    

];

const top_restaurants = [
    {rank: 1, name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', likes: 1232, img_url: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {rank: 2, name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', likes: 1045, img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {rank: 3, name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', likes: 978, img_url: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {rank: 4, name: '치치', address: '서울특별시 마포구 서교동 360-19', likes: 850, img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {rank: 5, name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', likes: 799, img_url: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
]


export default function SearchModal({ modalOn, handleClose, handleShow, handleSearchModal }) {
    
    const [keyWord, setKeyWord] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const keyWordInput = e => {
      setKeyWord(e.target.value);
    };

    const handleSearch = e => {
        let result = [];
        result = restaurants.filter((restaurant) => {
            return restaurant.name.search(keyWord) !== -1
                || restaurant.univ.search(keyWord) !== -1;
        });
        setFilteredData(result);   
    };

    const reset = () => {
        setFilteredData([]);
    };

    // const onKeyPress = e => {
    //     if (e.key === 'Enter'){
    //       onclick();
    //     }
    // };

    useEffect(() => {
      handleSearch(keyWord);
    }, [keyWord]);

    return (
      <WrapSearchModal>
        <Offcanvas show={modalOn} onHide={handleClose} placement="top">
          <Offcanvas.Header closeButton>
            <SearchWrap>
              <SearchInput
                  type="text"
                  placeholder="대학교명, 음식점 이름 등"
                  onChange={keyWordInput}
                  value={keyWord}
              />
              <BiSearch size="35" color="gray" style={{marginLeft: '20px'}} />
            </SearchWrap>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {keyWord ? (
                <div>
                    <SearchDataList filteredData={filteredData} />
                </div>
                ) : (
                <ImgArea>
                    <Top5List>
                    {top_restaurants.map(t_res => (
                        <Top5 id={t_res.rank} key={t_res.rank}>
                        <Top5Img alt={t_res.name} src={t_res.img_url} />
                        <Top5Name>{t_res.name}</Top5Name>
                        </Top5>
                    ))}
                    </Top5List>
                </ImgArea>
            )}
          </Offcanvas.Body>
        </Offcanvas>
      </WrapSearchModal>
    );
};

const WrapSearchModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: auto;
  background-color: rgba(34, 34, 34, 0.5);
  overflow-y: auto;
`;

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 32px 0 40px;
  min-width: 320px;
  width: 100%;
  height: 90px;
  align-items: center;
  background-color: white;
`;

const SearchInput = styled.input`
  width: 600px;
  height: 40px;
  cursor: text;
  border-radius: 8px;
  background-color: rgb(244, 244, 244);
  &::placeholder {
    font-size: 13px;
    color: gray;
    padding-left: 10px;
  }
`;

const ImgArea = styled.div`
  background-color: white;
`;

const Top5List = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
  text-align: center;
  cursor: pointer;
`;

const Top5 = styled.div`
  width: 120px;
  height: 130px;
  align-items: center;
  margin-top: 10px;
  margin-left: 15px;
  border-radius: 8px;
  background-color: rgb(246, 238, 237);
  &:hover {
    cursor: pointer;
    border: 3px solid white;
  }
`;

const Top5Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

const Top5Name = styled.p`
  margin-top: 5px;
  font-size: 12px;
`;
