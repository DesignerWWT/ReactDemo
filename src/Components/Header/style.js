import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Navbar = styled.nav `

`
export const NavbarContainer = styled.div `
    max-width: 1400px;
    margin: 0 auto;
`
export const NavbarRow = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap:wrap;
    margin:0 -15px;
`
export const NavlogoCol = styled.div `
    width: 15%;
    padding:0 15px;
    @media screen and (max-width:991px){
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
    }
`
export const Logo = styled(Link) `

`
export const LogoImg = styled.img `
    width:140px;

    @media screen and (max-width:1279px) and (min-width:992px){
        width:110px;
    }
    @media screen and (max-width:991px){
        width:85px;
    }
`
export const NavMenuCol = styled.div `
    width: 70%;
    padding:0 15px;

    @media screen and (max-width:1279px) and (min-width:992px){
        width: 60%
    }

    @media screen and (max-width:991px){
        width: 100%;
        position: absolute;
        top: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 500ms ease-in-out;
        right: ${({isOpen}) => (isOpen ? '0' : '-100%')};
        background: #ffffff;
    }
`
export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 55px;

    @media screen and (max-width:1279px) and (min-width:992px){
        column-gap: 20px;
    }

    @media screen and (max-width:991px){
        flex-direction: column;
        column-gap: 0;
        row-gap: 35px;
    }
`
export const NavMenuItem = styled.li `

    &:last-child{
        a{
            display:none;

            @media screen and (max-width:991px){
                display:block;
            }
    
        }
    }
`
export const NavMenuLink = styled(Link) `
    font-size: 22px;
    font-weight: 900;
    line-height: 26px;
    text-decoration: none;
    color: #CA952E;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
    transition: all 500ms ease-in-out;

    &:hover{
        color: #3E441F;
    }
`
export const NavButtonCol = styled.div `
    width: 15%;
    padding:0 15px;

    @media screen and (max-width:1279px) and (min-width:992px){
        width:20%;
    }

    @media screen and (max-width:991px){
        display:none;
    }
`
export const NavButtonLink = styled(Link)`
    width: 100%;
    display: inline-block;
    text-align: center;
    font-weight: 900;
    line-height: normal;
    border: 1px solid #3E441F;
    padding: 18px 0px;
    background: #3E441F;
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    letter-spacing:1px;
    transition: all 500ms ease-in-out;

    &:hover{
        background: #ffffff;
        color: #3E441F;
    }

`

export const LogoCollapseIcon = styled.div`
    font-size: 29px;
    display:none;

    @media screen and (max-width:991px){
        display:block;
    }
`

export const NavCloseIcon = styled.div`
    font-size: 29px;
    display:none;

    @media screen and (max-width:991px){
        display: flex;
        position: absolute;
        top: 25px;
        right: 25px;
        font-size: 25px;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #CA952E;
    }
`
