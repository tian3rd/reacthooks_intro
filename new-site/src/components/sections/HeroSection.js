import React from "react"
import styled from "styled-components"
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
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
`

const Description = styled(MediumText)``
