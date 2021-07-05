import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"
import { menuData } from "../../data/menuData"

export default function Header() {
  return (
    <Wrapper>
      <img src="/images/logos/logo.svg" alt="LOGO" />
      <MenuWrapper>
        {menuData.map((item, index) => (
          // map with key?
          <Link to={item.link} key={index}>
            <MenuItem>
              <img src={item.icon} alt={item.title} />
              {item.title}
            </MenuItem>
          </Link>
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
  grid-template-columns: repeat(5, auto);
  gap: 30px;
`

const MenuItem = styled.div`
  color: rgb(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  align-items: center;
  /* for clickable buttons add padding to all four sides */
  padding: 10px;
  /* apply transition for hover state */
  transition: 0.3s ease-in-out;
  /* to make the border consistent */
  border-radius: 10px;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    /* note transition should always be added to the parent wrapper, not the hover state itself*/
  }
`
