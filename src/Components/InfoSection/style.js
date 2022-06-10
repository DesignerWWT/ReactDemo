import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const InfoSectionWrap = styled.section `
    background-color: #FFFFFF;
    background-image:${({IsImg}) => (IsImg ? 'url(http://projects.worldwebdev.in/insyda/wp-content/uploads/2022/05/Artboard-%E2%80%932.png)' : 'url(http://projects.worldwebdev.in/insyda/wp-content/uploads/2022/05/Artboard-%E2%80%93-1.png)')} ;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    text-align:center;
    padding: 100px 24px 100px 24px;
    position: relative;

    &:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,1);
        opacity: 0.66;
    }

    @media screen and (max-width:991px) and (min-width:768px){
        padding:80px 24px;
    }

    @media screen and (max-width:767px){
        padding:50px 24px;
    }
`

export const Container = styled.div `
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index:1;
`

export const InfoSectiontTitle = styled.h1 `
    color: #FFFFFF;
    font-size: 75px;
    font-weight: 600;
    line-height: 120px;
    font-family: 'Pacifico', cursive;
    padding:0 0 40px;

    @media screen and (max-width:1279px) and (min-width:1024px){
        font-size: 45px;
        line-height: normal;
    }

    @media screen and (max-width:991px) and (min-width:768px){
        font-size: 45px;
        line-height: normal;
    }

    @media screen and (max-width:767px){
        font-size: 35px;
        line-height: normal;
    }
`

export const InfoSectionDesc = styled.p `
    color: #FFFFFF;
    font-family: "Quicksand", Sans-serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 44px;
    padding:0 0 65px;


    @media screen and (max-width:991px) and (min-width:768px){
        font-size: 18px;
        line-height: 24px;
    }

    @media screen and (max-width:767px){
        font-size: 16px;
        line-height: 24px;
    }
`

export const InfoSectionLink = styled(Link)
`
    width: auto;
    display: inline-block;
    text-align: center;
    font-weight: 900;
    line-height: normal;
    border: 2px solid #3E441F;
    padding: 18px 28px;
    background: #3E441F;
    color: #ffffff;
    font-size: 26px;
    text-decoration: none;
    font-family: 'Poppins',sans-serif;
    letter-spacing: 1px;
    transition: all 500ms ease-in-out;

    &:hover,
    &:focus{
        background: #ffffff;
        color: #3E441F;
    }

    @media screen and (max-width:991px) and (min-width:768px){
        font-size: 22px;
        font-weight: 500;
        padding: 10px 30px;
    }

    @media screen and (max-width:767px){
        font-size: 22px;
        font-weight: 500;
        padding: 10px 30px;
    }
`


export const InfoImg = styled.img `
`