import React from 'react'
import {
    InfoSectionWrap,
    Container,
    InfoSectiontTitle,
    InfoSectionDesc,
    InfoSectionLink}
from '../InfoSection/style'


function InfoSection({SectionTitle,SectionDesc,SectionLink,IsImg}) {
  return (
    <InfoSectionWrap IsImg={IsImg}>
        <Container>
            <InfoSectiontTitle>
                {SectionTitle}
            </InfoSectiontTitle>
            <InfoSectionDesc>
                {SectionDesc}
            </InfoSectionDesc>
            <InfoSectionLink to='/'>
                {SectionLink}
            </InfoSectionLink>
        </Container>
    </InfoSectionWrap>
  )
}

export default InfoSection;