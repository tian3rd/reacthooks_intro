import React from "react"
import styled from "styled-components"
import { tooltipData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"

export default function MenuTooltip(props) {
  const { isOpen } = props
  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) => (
        <MenuButton item={item} key={index} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* copied from Figma */
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  padding: 20px;
  /* set the menu tooltip to be floating rather than default on the left */
  position: absolute;
  top: 60px;
  right: 30px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  z-index: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: 150px;
  /* add transition */
  transition: 0.3s ease-in-out;
  /* with opacity 0, it's invisible but still clickable when hovered over, so set the display to none when isOpen is 0, the problem is that the transition disappears*/
  /* display: ${props => (props.isOpen ? "block" : "none")}; */
  /* use visibility to maintain the transition effect */
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  /* transform: skewY(5deg) rotate(2deg) translateY(-10px); */
  transform: ${props =>
    props.isOpen
      ? "skewY(0deg) rotate(0deg) translateY(0px)"
      : "skewY(5deg) rotate(2deg) translateY(-10px)"};
`
