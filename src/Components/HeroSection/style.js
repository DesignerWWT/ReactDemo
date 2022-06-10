import styled from 'styled-components'



export const HeroSectionWrap = styled.section `
    background-image: url(http://projects.worldwebdev.in/insyda/wp-content/uploads/2022/05/Hero-Background.jpg);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

export const HeroImage = styled.img `
    width: 100%;
    height: auto;
    position: relative;
    z-index: 2;
    object-fit: cover;
    

    @media screen and (max-width:991px) and (min-width:768px){
        height: 550px;
    }

    @media screen and (max-width:767px){
        height: 460px;
    }

`
export const HeroTitleWrap = styled.div `
    position: absolute;
    left: 0;
    width: 100% !important;
    top: 24%;
    z-index: 1;

    @media screen and (max-width:1440px) and (min-width:1280px){
        padding:0 24px;
        top:22%;
    }

    @media screen and (max-width:1279px) and (min-width:992px){
        padding:0 24px;
        top:22%;
    }

    @media screen and (max-width:991px) and (min-width:768px){
        padding:0 24px;
        top:25%;
    }

    @media screen and (max-width:767px){
        padding:0 24px;
        top:28%;
    }
`

export const HeroTitleContainer = styled.div `
    max-width: 1400px;
    margin: 0 auto;
`


export const HeroTitle = styled.h1 `
    text-transform: uppercase;
    color: rgb(128, 155, 168);
    font-size: 127px;
    font-family: 'Anton', sans-serif;
    text-shadow: 6px 6px 0 #809ba870;
    opacity: 0.9;
    line-height: 1;
    letter-spacing: 4px;

    @media screen and (max-width:1440px) and (min-width:1280px){
        text-shadow: 3px 1px 0 #809ba870;
        font-size: 94px;
        line-height: 98px;
        letter-spacing: 2px;
    }

    @media screen and (max-width:1279px) and (min-width:992px){
        text-shadow: 3px 1px 0 #809ba870;
        font-size: 70px;
        line-height: 70px;
        letter-spacing: 2px;
    }


    @media screen and (max-width:991px) and (min-width:768px){
        text-shadow: 3px 1px 0 #809ba870;
        font-size: 54px;
        line-height: 56px;
        letter-spacing: 2px;
    }


    @media screen and (max-width:767px){
        font-size: 35px;
        width: 100%;
        line-height: 39px;
        letter-spacing: 2px;
        text-shadow: 2px 3px 0 #809ba870;
    }


    span{
        display:block;
        font-size: 113px;

        @media screen and (max-width:1440px) and (min-width:1280px){
            font-size: 82px;
        }

        @media screen and (max-width:1279px) and (min-width:992px){
            font-size: 61px;
        }

        @media screen and (max-width:991px) and (min-width:768px){
            font-size: 47px;
        }

        @media screen and (max-width:767px){
            font-size: 30px;
        }
    }
`