import React from 'react'
import HeroImages from '../../Images/bg-front-image.png'
import {
    HeroSectionWrap,
    HeroImage,
    HeroTitleWrap,
    HeroTitleContainer,
    HeroTitle
    } from '../HeroSection/style'

function HeroSection() {
  return (
    <HeroSectionWrap>
        <HeroImage src={HeroImages} />
        <HeroTitleWrap>
            <HeroTitleContainer>
                <HeroTitle>
                    UNLIMITED POTENTIAL <span>LIMITLESS POSSIBILITIES</span>
                </HeroTitle>
            </HeroTitleContainer>
        </HeroTitleWrap>
    </HeroSectionWrap>
  )
}

export default HeroSection;