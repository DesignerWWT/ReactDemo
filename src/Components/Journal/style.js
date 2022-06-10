import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const JournalSection = styled.section `
    padding:100px 24px;
`
export const JournalContainer = styled.div `
    max-width: 1400px;
    margin: 0 auto;
`
export const JournalRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
`
export const JournalCol = styled.div `
    width: 33.33%;
    padding: 0 15px;

    @media screen and (max-width:767px){
        width:100%;
        padding-bottom:80px;

        &:last-child{
            padding-bottom:0;
        }
    }

   
`
export const JournalInner = styled.div `
    position: relative;
    text-align:center;
`
export const JournalImage = styled.img `
    width: 100%;
    height: auto;
`
export const JournalDate = styled.span `
    position: absolute;
    background: #fff;
    top: -40px;
    padding: 2px 26px;
    right: 20px;
    box-shadow: 0px 0px 35px #00000029;
    font-weight: bold;
    font-size: 16px;
    text-align: center;

    span{
        display: block;
        font-size: 36px;
        line-height: 39px;
    }
`
export const JournalTitle = styled.h3 `
    margin: 30px 0 15px;
    color: #CA952E;
    font-size: 28px;
    font-weight: 900;
    line-height: 38px;

    @media screen and (max-width:991px) and (min-width:768px){
        font-size: 20px;
        line-height: normal;
    }
`
export const JournalText = styled.p `
    color: #20201F;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    margin: 0px 0px 25px;

    @media screen and (max-width:991px) and (min-width:768px){
        font-size: 16px;
        line-height: normal;
    }
`
export const JournalLink = styled(Link)`
    font-family: "Quicksand", Sans-serif;
    font-size: 22px;
    font-weight: bold;
    text-decoration: underline;
    fill: #3E441F;
    color: #3E441F;
    padding: 0px 0px 0px 0px;
    transition: all 500ms ease-in-out;

    &:hover{
        color:#CA952E;
    }
`
