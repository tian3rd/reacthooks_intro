import React from "react"
import styled from "styled-components"

export default function MockupAnimation() {
  return (
    <Wrapper>
      <div className="mockup1" />
      <div className="mockup2" />
      <div className="mockup3" />
      <div className="mockup4" />
      <div className="mockup5" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  /* distance between z=0 plane and the user */
  perspective: 5000;
  /* perspective-origin: top left; */

  div {
    /* add 3D transformation */
    transform: rotateX(20deg) rotateY(10deg) rotateZ(3deg);
    /* for rotations */
    transform-origin: bottom left;
  }

  /* select all to apply animations */
  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover div {
    transform: rotateX(0deg) rotateY(0deg);
    /* apply indivisually: '&' means self */
    &.mockup1 {
      transition-delay: 0.1s;
      transform: translate(-30px, -30px);
    }
    &.mockup2 {
      transition-delay: 0.2s;
      transform: translate(0px, -30px);
    }
    &.mockup3 {
      transition-delay: 0s;
    }
    &.mockup4 {
      transition-delay: 0.1s;
      transform: translate(-120px, 30px);
    }
    &.mockup5 {
      transition-delay: 0.2s;
      transform: translate(-60px, 30px);
    }
    /* nesting to change inside the already changed mockups indivisually */
    :hover {
      filter: brightness(150%) saturate(120%);
    }
  }

  .mockup1 {
    /* mockup1 copied from Figma */

    position: absolute;
    width: 183px;
    height: 120px;
    left: 0px;
    top: 0px;

    background: url("/images/animations/mockup1.svg"),
      radial-gradient(
        218.51% 281.09% at 100% 100%,
        rgba(253, 63, 51, 0.6) 0%,
        rgba(76, 0, 200, 0.6) 45.83%,
        rgba(76, 0, 200, 0.6) 100%
      );
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;
  }

  .mockup2 {
    /* mockup2 from Figma */

    position: absolute;
    width: 183px;
    height: 120px;
    left: 214px;
    top: 0px;

    background: url("/images/animations/mockup2.svg"),
      linear-gradient(
        198.85deg,
        #4316db 12.72%,
        #9076e7 54.49%,
        #a2eeff 100.01%
      );
    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(21.8432px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;
  }

  /* ISSUE: safari and firefox will not show mockup3-5 correctly sometimes */
  .mockup3 {
    /* mockup3 */

    position: absolute;
    width: 701px;
    height: 428px;
    left: 37px;
    top: 60px;

    background: url("/images/animations/mockup3.svg"), rgba(23, 12, 61, 0.5);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }

  .mockup4 {
    /* mockup4 */

    position: absolute;
    width: 399px;
    height: 274px;
    left: 194px;
    top: 262px;

    background: url("/images/animations/mockup4.svg"), rgba(39, 20, 62, 0.3);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }

  .mockup5 {
    /* mockup5 */

    position: absolute;
    width: 412px;
    height: 274px;
    left: 616px;
    top: 262px;

    background: url("/images/animations/mockup5.svg"), rgba(39, 20, 62, 0.2);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }
`
