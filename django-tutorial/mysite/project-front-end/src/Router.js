import React from "react";
import {
    Switch,
    Route,
    useParams
  } from 'react-router-dom';

import Main from './pages/Main';
import Top10_page from './pages/Top10_page';
import SelectUniv from './pages/SelectUniv';
import Univ from './pages/Univ';
import Hot_Posts from './pages/HotPosts';

import MyPage from './pages/MyPage';
import MyLikes from './pages/MyLikes';
import WritePost from './pages/WritePost';
import Restaurant from './pages/RestaurantPage';
import History from './pages/History';
import Register from './pages/Register';
import TimeSearchPage from './pages/TimeSearchPage';
import TimeSearchBanner from "./component/TimeSearchBanner";

export default function Router(){
    const db_restaurants = [
        {res_id: 1, name: '히메시야', xcoord: '126.926793', ycoord: '37.556249', address: '서울특별시 마포구 상수동 독막로15길 3-18', likes: 1232, wish: 200, reviews: 10, img_url: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F', tel: '02-320-1114', foodtype: '한식'},
        {res_id: 2, name: '소코아', xcoord: '126.9209408', ycoord: '37.54864484', address: '서울특별시 마포구 서교동 와우산로15길 49', likes: 1045, wish: 200, reviews: 11, img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg', tel: '02-320-1114', foodtype: '한식'},
        {res_id: 3, name: '카미야', xcoord: '126.9223733', ycoord: '37.55257584', address: '서울특별시 마포구 서교동 와우산로21길 28-6', likes: 978, wish: 200, reviews: 12, img_url: 'https://img.siksinhot.com/article/1456730835391124.jpg', tel: '02-320-1114', foodtype: '한식'},
        {res_id: 4, name: '치치', xcoord: '126.9238909', ycoord: '37.55090909', address: '서울특별시 마포구 서교동 360-19', likes: 850, wish: 200, reviews: 13, img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg', tel: '02-320-1114', foodtype: '한식'},
        {res_id: 5, name: '코다차야', xcoord: '126.9234186', ycoord: '37.5485299', address: '서울특별시 마포구 상수동 와우산로 48', likes: 799, wish: 200, reviews: 14, img_url: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925', tel: '02-320-1114', foodtype: '한식'},
        {res_id: 6, name: '광안리', xcoord: '126.917919', ycoord: '37.55029514', address: '서교동 396-44번지 하동 1층 마포구 서울특별시 KR', likes: 729, wish: 200, reviews: 15, img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg', tel: '02-320-1114', foodtype: '한식'},
        {res_id: 7, name: '노가리 천원', xcoord: '126.9254631', ycoord: '37.5556921', address: '서울특별시 마포구 서교동 어울마당로 149-3', likes: 603, wish: 200, reviews: 16, img_url: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A', tel: '02-320-1114', foodtype: '한식'},
        {res_id: 8, name: '동경야시장', xcoord: '126.9258341', ycoord: '37.55617563', address: '서울특별시 마포구 서교동 어울마당로 144', likes: 505, wish: 200, reviews: 17, img_url: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG', tel: '02-320-1114', foodtype: '한식'},
        {res_id: 9, name: '제순식당', xcoord: '126.9258341', ycoord: '37.55617563', address: '서울특별시 마포구 서교동 어울마당로 144', likes: 505, wish: 200, reviews: 17, img_url: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG', tel: '02-320-1114', foodtype: '한식'},
        {res_id: 10, name: '부라문 야시장', xcoord: '126.9258341', ycoord: '37.55617563', address: '서울특별시 마포구 서교동 어울마당로 144', likes: 505, wish: 200, reviews: 17, img_url: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG', tel: '02-320-1114', foodtype: '한식'},
    ]

    const Restaurants = () => {
      const { res_id } = useParams();
      return (
        <Restaurant resInfo={db_restaurants[res_id - 1]} />
      );
    };
    
    return(

        <Switch>
          <Route path="/univ" exact component={SelectUniv}/>
          <Route path="/univ/:univIndex" exact component={Univ}/>
          
          <Route path="/hotpost" exact component={Hot_Posts}/>
          <Route path="/places/rank" exact component={Top10_page}/>
          <Route path="/places/:res_id" exact component={Restaurants} />
          <Route path="/places/write/:res_id" exact component={WritePost} />
          <Route path="/" exact component={Main}/>

          <Route path="/time-search/list" exact component={TimeSearchPage}/>
          <Route path="/likes" exact component={MyLikes}></Route>
          <Route path="/register" exact component={Register}/>

          <Route path="/my/history" exact component={History}></Route>

          <Route path="/my/edit" exact>
            <MyPage link='edit'/>
          </Route>
          <Route path="/my/post" exact>
            <MyPage link='post'/>
          </Route>
          <Route path="/my/reply" exact>
            <MyPage link='reply'/>
          </Route>
          <Route path="/my/likes" exact>
            <MyPage link='likes'/>
          </Route>
          <Route path="/logout" exact>
            <Main />
          </Route>

          <Route><h1>404 NOT FOUND</h1></Route>
        </Switch>                              
    );
}