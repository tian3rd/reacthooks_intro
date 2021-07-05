import React from "react"
import styled from "styled-components"

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      {/* inline styling, or use css selectors like in PurchaseButton.js */}
      <Wave
        src="/images/waves/hero-wave1.svg"
        // blur may reduce performance on older machines
        style={{ top: "100px", filter: "blur(60px)" }}
      />
      <Wave src="/images/waves/hero-wave2.svg" style={{ top: "350px" }} />
      <Wave src="/images/waves/hero-wave3.svg" style={{ top: "550px" }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Wave = styled.img`
  position: absolute;
  z-index: -1;

  /* for larger screens */
  @media (min-width: 1440px) {
    width: 100%;
  }
`

const Background = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  /* set the background size */
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`
