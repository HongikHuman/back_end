import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const UnivLogo = (props) =>{
    //props.name => 원하는 이미지 리턴
    //props 공란 => 전체 리턴

    const importAll = (r) =>{
        let images = {};
        r.keys().forEach((item, idx) => { images[item.replace('./', '')] = r(item);});
        return images;
    }
    const images = importAll(require.context('../logos', false, /\.(png|jpg?g|svg)$/));

    let components = [];
    let requireAll = true;
    if(props.name){ requireAll = false; }


    for(const item in images){
        if(requireAll){
            components.push(
                //<Link to={`univ/${item.replace(/\.(png|jpg?g|svg)$/, '')}`}>
                    <Image src={images[item].default}
                        style={ props.style??
                            {width: `${!props.width ? 100 : props.width}px`,
                            height: `${!props.height ? 100 : props.height}px`}}
                    >
                    </Image>
                //</Link>
            );
        } else{
            if(item.indexOf(props.name) > -1) components.push(
                //<Link to={`univ/${item.replace(/\.(png|jpg?g|svg)$/, '')}`}>
                    <Image src={images[item].default}
                        style={ props.style??
                            {width: `${!props.width ? 100 : props.width}px`,
                            height: `${!props.height ? 100 : props.height}px`}}
                    >
                    </Image>
                //</Link>
            );
        }
    }

    return(
        <>{components}</>
    )
}

export default UnivLogo;