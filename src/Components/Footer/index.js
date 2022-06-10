import React from 'react'
import image from '../../Images/footer-logo.png'
import {
    FooterWrap,
    Container,
    FooterRow,
    FooterCol,
    FooterText,
    FooterLogo

} from '../Footer/style'




function Footer() {
  return (
    <FooterWrap>
        <Container>
            <FooterRow>
                <FooterCol>
                    <FooterLogo src={image} />
                </FooterCol>
                <FooterCol>
                    <FooterText>© 2022 insyda.com</FooterText>
                </FooterCol>
            </FooterRow>
        </Container>
    </FooterWrap>
  )
}

export default Footer;