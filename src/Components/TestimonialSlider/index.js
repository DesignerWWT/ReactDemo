import React from 'react'
import {
  TestimonialSliderWrap,
  Container,
  TestimonialTitle,
  TestimonialInnerSlider,
  Item,
  StarWrap,
  TestimonailText,
  TestimonailAuthor
} from '../TestimonialSlider/style'

import Carousel from 'react-elastic-carousel'
import { FaStar } from "react-icons/fa";


const breakPoints = [
  { width: 0, itemsToShow: 1},
  { width: 991, itemsToShow: 1 },
  { width: 1024, itemsToShow: 2 , showArrows: false, itemPadding:[10]  }
]


function TestimonialSlider() {

  return (
    <TestimonialSliderWrap>
        <Container>
            <TestimonialTitle>
                What Happy Humans Are Saying!
            </TestimonialTitle>
            <TestimonialInnerSlider>
                <Carousel breakPoints={breakPoints}>
                    <Item>
                        <StarWrap>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </StarWrap>
                        <TestimonailText>
                        Rachel has volunteered with the Greater Clermont Cancer Foundation for over 10 years and has been a great asset to our signature fundraiser "Bras for the Cause". She brings a high energy to the event and it has been a joy to work with. She brings out the best in the other models and helps them relax and enjoy their time in the spotlight.  Someone called her a shining sunflower and I think that is a great compliment to her.  She knows how to bring out the best in each person she meets.
                        </TestimonailText>
                        <TestimonailAuthor>Katherine Simpson</TestimonailAuthor>
                    </Item>
                    <Item>
                        <StarWrap>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </StarWrap>
                        <TestimonailText>
                        Thank you Rachel for allowing me in your presence, to experience priceless and unique conversations with power.
                        </TestimonailText>
                        <TestimonailAuthor>Isaiah Thompson</TestimonailAuthor>
                    </Item>
                    <Item>
                        <StarWrap>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </StarWrap>
                        <TestimonailText>
                        So much amazing insight! So radiant! She is such a gift!
                        </TestimonailText>
                        <TestimonailAuthor>Patty Witt</TestimonailAuthor>
                    </Item>
                    <Item>
                        <StarWrap>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </StarWrap>
                        <TestimonailText>
                        I always look forward to my talks with Rachel. She has such knowledge and passion. Sometimes we get so set in our beliefs and problems that we can't see around them. Talking to Rachel allowed me to look at my problems from a different perspective. It made a huge difference and was like a big weight was lifted from my shoulders. She's so easy to talk to and nonjudgmental. Highly recommend!!!
                        </TestimonailText>
                        <TestimonailAuthor>Chassidy Merritt </TestimonailAuthor>
                    </Item>
                    <Item>
                    <StarWrap>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </StarWrap>
                        <TestimonailText>
                        I always look forward to my talks with Rachel. She has such knowledge and passion. Sometimes we get so set in our beliefs and problems that we can't see around them. Talking to Rachel allowed me to look at my problems from a different perspective. It made a huge difference and was like a big weight was lifted from my shoulders. She's so easy to talk to and nonjudgmental. Highly recommend!!!
                        </TestimonailText>
                        <TestimonailAuthor>Chassidy Merritt </TestimonailAuthor>
                    </Item>
                    <Item>
                    <StarWrap>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </StarWrap>
                        <TestimonailText>
                        I always look forward to my talks with Rachel. She has such knowledge and passion. Sometimes we get so set in our beliefs and problems that we can't see around them. Talking to Rachel allowed me to look at my problems from a different perspective. It made a huge difference and was like a big weight was lifted from my shoulders. She's so easy to talk to and nonjudgmental. Highly recommend!!!
                        </TestimonailText>
                        <TestimonailAuthor>Chassidy Merritt </TestimonailAuthor>
                    </Item>
                </Carousel>
            </TestimonialInnerSlider>
        </Container>
    </TestimonialSliderWrap>
  )
}

export default TestimonialSlider;