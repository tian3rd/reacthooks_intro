import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"
import { Link } from "gatsby"

export default function PurchaseButton(props) {
  const { title, subtitle } = props
  return (
    <Link to="/page-2">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons-part/credit.svg" />
          <Ring src="/images/icons-part/icon-ring.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Get Pro Access"}</Title>
          <Subtitle>{subtitle || "$2 per month"}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  /* set icon and text side by side */
  display: grid;
  /* first column (icon) 53px; */
  grid-template-columns: 53px auto;
  /* only align when child content is smaller than parent content*/
  /* align-content: center; */
  align-items: center;
  gap: 20px;
`

const Title = styled(Caption2)`
  color: black;
`

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`

const Icon = styled.img`
  width: 29px;
  height: 29px;
`

const Ring = styled.img`
  position: absolute;
  /* absolute vs IconWrappter relative, but how to calc exact pixels */
  top: -15px;
  left: -16px;
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  /* make a circle */
  border-radius: 50%;
  /* css grid to center svg img */
  display: grid;
  justify-content: center;
  align-content: center;
  /* 45px vs 53px of parent assigned width, to center it */
  justify-self: center;
  position: relative;
`

const TextWrapper = styled.div`
  display: grid;
  /* align-content: center; */
  gap: 4px;
`
