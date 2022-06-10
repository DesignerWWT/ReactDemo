import styled from 'styled-components'

export const FooterWrap = styled.footer `
    background: #3E441F;
    padding: 30px 24px;
`
export const Container = styled.div `
    max-width: 1400px;
    margin: 0 auto;
`
export const FooterRow = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap:wrap;

    @media screen and (max-width:767px){
        flex-direction:column;
    }
`
export const FooterCol = styled.div `

`
export const FooterLogo = styled.img `
    width: 210px;
    @media screen and (max-width:767px){
        margin-bottom:30px;
    }
`
export const FooterText = styled.p `
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
`