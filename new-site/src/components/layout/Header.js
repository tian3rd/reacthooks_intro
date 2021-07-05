import { Link } from "gatsby"
import styled from "styled-components"
import React, { useState } from "react"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import MenuTooltip from "../tooltips/MenuTooltip"

export default function Header() {
  // search useState for more uses
  const [isOpen, setIsOpen] = useState(false)

  function handleClick(event) {
    setIsOpen(!isOpen)
    // prevent default behavior and use the customized one
    event.preventDefault()
    console.log(event)
  }

  return (
    <Wrapper>
      {/* redirect logo to homepages */}
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="LOGO" />
      </Link>
      {/* here calc menu array length */}
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            // conflict with default behavior;
            <MenuButton
              item={item}
              key={index}
              // pass it to the actual onClick link as props.onClick
              onClick={event => handleClick(event)}
            />
          ) : (
            // map with key? (anytime you use the loop, you should set the key)
            <MenuButton item={item} key={index} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", link: "" }}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      {/* add tool to toggle states */}
      <MenuTooltip isOpen={isOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  /* horizontally distributed (only 2 are specified: 44px and auto)*/
  grid-template-columns: 44px auto;
  /* left to the left, right to the right */
  justify-content: space-between;
  /* to ensure absolute setting takes up full width */
  width: 100%;
  /* left padding */
  padding: 0 30px;
  /* center text and logo for grid columns */
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  /* use repeat for 3 columns: courses, tutorials, and pricing */
  grid-template-columns: repeat(${props => props.count}, auto);
  gap: 30px;

  @media (max-width: 768px) {
    /* select all links 'a' tag of immediate children: the MenuButton has a, but not the Hamburger */
    > a {
      display: none;
    }
    /* for only one hamburger menu */
    grid-template-columns: auto;
  }
`

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`
