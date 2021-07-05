import React from "react"
import styled, { keyframes } from "styled-components"
import MockupAnimation from "../animations/MockupAnimation"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import WaveBackground from "../backgrounds/WaveBackground"

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Survive
            <br /> and Thrive
          </Title>
          <Description>
            Hackers/AIs/Unkowns wait for no one. World around you has evolving
            so quickly that without acute senses, one will easily gets lost in
            the transition. Rather than passively defending yourself, better
            prepare yourself for the tide that's coming at you!
          </Description>
          <PurchaseButton
            title="Start Digging"
            subtitle="3 articles every week"
          />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

// add keyframes as animation effect from styled-components
const animation = keyframes`
  /* start point and end point */
  from { opacity: 0; transform: translateY(-10px); filter: blur(10px);}
  /* 'from' is equal to 0%; 'to' is equal to 100% */
  to { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  /* background: linear-gradient(180deg, #4316db 0%, #9076e7 100%); */
  /* forbid the horizontal scrolling when position absolute overflows */
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  /* center with margin "0 auto" technique */
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  /* use '>' to '*' to select only immediate children, not children of children */
  > * {
    /* use just defined animation with $() */
    /* set the opacity to 0 first, forwards to stay visible: opacity 1 */
    opacity: 0;
    animation: ${animation} 1s forwards;

    /* set delay separately after general animation settings */
    :nth-child(1) {
      /* select the 1st child: title */
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
`

const Description = styled(MediumText)``
