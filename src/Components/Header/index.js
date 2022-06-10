import React , {useState} from 'react'
import {
    Navbar,
    NavbarContainer,
    NavbarRow,
    NavlogoCol,
    Logo,
    LogoImg,
    NavMenuCol,
    NavMenu,
    NavMenuItem,
    NavMenuLink,
    LogoCollapseIcon,
    NavButtonCol,
    NavButtonLink,
    NavCloseIcon
} from '../Header/style'

import logoimg from '../../Images/logo.png'
import { AiOutlineMenu,AiOutlineLeft } from "react-icons/ai";






function Header() {

    const [isOpen, setisOpen] = useState(false)
    
    const toggle = () => {
        setisOpen(!isOpen);
    };


  return (
    <header>
        <Navbar>
            <NavbarContainer>
                <NavbarRow>
                    <NavlogoCol>
                        <Logo to="/">
                            <LogoImg src={logoimg} />
                        </Logo>
                        <LogoCollapseIcon onClick={toggle}>
                            <AiOutlineMenu />
                        </LogoCollapseIcon>
                    </NavlogoCol>
                    <NavMenuCol isOpen={isOpen} toggle={toggle}>
                        <NavCloseIcon onClick={toggle}>
                            <AiOutlineLeft /> Back
                        </NavCloseIcon>
                        <NavMenu>
                            <NavMenuItem>
                                <NavMenuLink to="/">
                                    HOME
                                </NavMenuLink>
                            </NavMenuItem>
                            <NavMenuItem >
                                <NavMenuLink to="/about">
                                    ABOUT
                                </NavMenuLink>
                            </NavMenuItem>
                            <NavMenuItem>
                                <NavMenuLink to="/services">
                                    SERVICES
                                </NavMenuLink>
                            </NavMenuItem>
                            <NavMenuItem>
                                <NavMenuLink to="/contact">
                                    CONTACT
                                </NavMenuLink>
                            </NavMenuItem>
                            <NavMenuItem>
                                <NavMenuLink to="/journal">
                                    JOURNAL
                                </NavMenuLink>
                            </NavMenuItem>
                            <NavMenuItem>
                                <NavMenuLink to="/contact">
                                    LET'S CONNECT!
                                </NavMenuLink>
                            </NavMenuItem>
                        </NavMenu>
                    </NavMenuCol>
                    <NavButtonCol>
                        <NavButtonLink to="/contact">
                            LET'S CONNECT!
                        </NavButtonLink>
                    </NavButtonCol>
                </NavbarRow>
            </NavbarContainer>
        </Navbar>
    </header>
  )
}

export default Header;