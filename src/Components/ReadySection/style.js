import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const ReadySectionWrap = styled.section `
    background-image: url(http://projects.worldwebdev.in/insyda/wp-content/uploads/2022/05/Boy-Image.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top:-70px;
    text-align:center;
    position: relative;
    z-index: 2;
    padding:0 24px 100px;

    @media screen and (max-width:767px){
        padding-bottom:50px;
    }
`

export const Container = styled.div `
    max-width: 1400px;
    margin: 0 auto;
`

export const ReadySectionTitle = styled.h1 `
    color: #CA952E;
    font-size: 55px;
    font-weight: 900;
    margin-bottom:56px;

    @media screen and (max-width:991px) and (min-width:768px){
        font-size: 40px;
    }

    @media screen and (max-width:767px){
        font-size: 35px;
        line-height: 40px;
    }
`

export const ReadySectionRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;

    &:nth-child(3) div{
        margin-bottom:50px;

        @media screen and (max-width:767px){
            margin-bottom:0;
        }
    }
`

export const ReadySectionCol = styled.div `
    width: 33.33%;
    padding: 0 15px;

    @media screen and (max-width:767px){
        width:100%;
        padding-bottom:30px;
    }
`

export const ReadyIcon = styled.img `
    width: 77px;
`
export const ReadyTitle = styled.h3 `
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
    margin: 25px 0;
    color: #CA952E;


    @media screen and (max-width:991px) and (min-width:768px){
        font-size: 28px;
    }

    @media screen and (max-width:767px){
        font-size: 25px;
        margin: 15px 0;
    }
`
export const ReadyDescription = styled.p `
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;

    @media screen and (max-width:767px){
        font-size: 18px;
        line-height: normal;
    }

`

export const ReadySectionLink = styled(Link) `
    width: auto;
    display: inline-block;
    text-align: center;
    font-weight: 900;
    margin-top:50px;
    line-height: normal;
    border: 1px solid #3E441F;
    padding: 18px 28px;
    background: #3E441F;
    color: #ffffff;
    font-size: 22px;
    text-decoration: none;
    font-family: 'Poppins',sans-serif;
    letter-spacing: 1px;
    -webkit-transition: all 500ms ease-in-out;
    transition: all 500ms ease-in-out;

    &:hover{
        background: #ffffff;
        color: #3E441F;
    }

    @media screen and (max-width:991px) and (min-width:768px){
        font-size: 18px;
        padding: 18px 0;
        width: 100%;
    }

`