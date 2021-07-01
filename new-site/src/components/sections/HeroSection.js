import React from "react"
import styled from "styled-components"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

function HeroSection() {
  return (
    <Wrapper>
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
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
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
