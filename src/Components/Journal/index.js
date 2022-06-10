import React from 'react'
import {
    JournalSection,
    JournalContainer,
    JournalRow,
    JournalCol,
    JournalInner,
    JournalImage,
    JournalDate,
    JournalTitle,
    JournalText,
    JournalLink
} from '../Journal/style'

import ji1 from '../../Images/ji1.png'
import ji2 from '../../Images/ji2.png'
import ji3 from '../../Images/j3.png'


function Journal() {
  return (
    <JournalSection>
        <JournalContainer>
            <JournalRow>
                <JournalCol>
                    <JournalInner>
                        <JournalImage src={ji1} />
                            <JournalDate>
                                FEB<span>10</span>2022
                            </JournalDate>
                            <JournalTitle>Your Heading Goes Here</JournalTitle>   
                            <JournalText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</JournalText>
                            <JournalLink to="/">Read More​</JournalLink>
                    </JournalInner>
                </JournalCol>
                <JournalCol>
                    <JournalInner>
                        <JournalImage src={ji2} />
                            <JournalDate>
                                FEB<span>10</span>2022
                            </JournalDate>
                            <JournalTitle>Your Heading Goes Here</JournalTitle>   
                            <JournalText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</JournalText>
                            <JournalLink to="/">Read More​</JournalLink>
                    </JournalInner>
                </JournalCol>
                <JournalCol>
                    <JournalInner>
                        <JournalImage src={ji3} />
                            <JournalDate>
                                FEB<span>10</span>2022
                            </JournalDate>
                            <JournalTitle>Your Heading Goes Here</JournalTitle>   
                            <JournalText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</JournalText>
                            <JournalLink to="/">Read More​</JournalLink>
                    </JournalInner>
                </JournalCol>
            </JournalRow>
        </JournalContainer>
    </JournalSection>
  )
}

export default Journal;