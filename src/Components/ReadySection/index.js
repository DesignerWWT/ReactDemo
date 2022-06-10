import React from 'react'
import icon1 from '../../Images/icon1.svg'
import icon2 from '../../Images/icon2.svg'
import icon3 from '../../Images/icon3.svg'
import icon4 from '../../Images/icon4.svg'
import icon5 from '../../Images/icon5.svg'

import {
    ReadySectionWrap,
    Container,
    ReadySectionTitle,
    ReadySectionRow,
    ReadySectionCol,
    ReadyIcon,
    ReadyTitle,
    ReadyDescription,
    ReadySectionLink
} from '../ReadySection/style'


function ReadySection() {
  return (
    <ReadySectionWrap>
        <Container>
            <ReadySectionTitle>
                Ready To Transform Your Life?
            </ReadySectionTitle>
            <ReadySectionRow>
                <ReadySectionCol></ReadySectionCol>
                <ReadySectionCol>
                    <ReadyIcon src={icon1} />
                    <ReadyTitle>
                        Redefine Self
                    </ReadyTitle>
                    <ReadyDescription>
                    Through questioning, challenging and rewriting lifelong limitations
                    </ReadyDescription>
                </ReadySectionCol>
                <ReadySectionCol></ReadySectionCol>
            </ReadySectionRow>
            <ReadySectionRow>
                <ReadySectionCol>
                    <ReadyIcon src={icon2} />
                    <ReadyTitle>
                        Reprogram Routines
                    </ReadyTitle>
                    <ReadyDescription>
                        That habitually halt your progress
                    </ReadyDescription>
                </ReadySectionCol>
                <ReadySectionCol></ReadySectionCol>
                <ReadySectionCol>
                    <ReadyIcon src={icon3} />
                    <ReadyTitle>
                        Revive Purpose
                    </ReadyTitle>
                    <ReadyDescription>
                        By authentically aligning with your gifts, goals and genuine greatness
                    </ReadyDescription>
                </ReadySectionCol>
            </ReadySectionRow>
            <ReadySectionRow>
                <ReadySectionCol>
                    <ReadyIcon src={icon4} />
                    <ReadyTitle>
                        Renew Awareness
                    </ReadyTitle>
                    <ReadyDescription>
                        Around the cyclical patterns directing your life
                    </ReadyDescription>
                </ReadySectionCol>
                <ReadySectionCol></ReadySectionCol>
                <ReadySectionCol>
                    <ReadyIcon src={icon5} />
                    <ReadyTitle>
                        Regain Confidence
                    </ReadyTitle>
                    <ReadyDescription>
                        By stepping into your power and seeing your significance shine
                    </ReadyDescription>
                </ReadySectionCol>
            </ReadySectionRow>
            <ReadySectionRow>
                <ReadySectionCol></ReadySectionCol>
                <ReadySectionCol>
                    <ReadySectionLink to="/">NOW'S THE TIME!</ReadySectionLink>
                </ReadySectionCol>
                <ReadySectionCol></ReadySectionCol>
            </ReadySectionRow>
        </Container>
    </ReadySectionWrap>
  )
}

export default ReadySection;