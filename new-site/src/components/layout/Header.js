import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"

export default function Header() {
  return (
    <Wrapper>
      {/* redirect logo to homepages */}
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="LOGO" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) => (
          // map with key? (anytime you use the loop, you should set the key)
          <MenuButton item={item} key={index} />
        ))}
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  /* horizontally distributed */
  grid-template-columns: 44px auto;
  /* left to the left, right to the right */
  justify-content: space-between;
  /* to ensure absolute setting takes up full width */
  width: 100%;
  /* left padding */
  padding: 0 30px;
  /* center text and logo for grid columns */
  align-items: center;
`

const MenuWrapper = styled.div`
  display: grid;
  /* use repeat for 3 columns: courses, tutorials, and pricing */
  grid-template-columns: repeat(${props => props.count}, auto);
  gap: 30px;
`
