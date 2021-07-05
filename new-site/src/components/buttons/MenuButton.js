import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function MenuButton(props) {
  const { item } = props
  return (
    // removed the key to original Header.js to be included in <MenuButton />
    <Link to={item.link}>
      {/* add title property, use {} to wrap it up */}
      <MenuItem title={item.title}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    </Link>
  )
}

const MenuItem = styled.div`
  color: rgb(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  /* adapt the gap between icon and title dynamically: if there's no title, show no gap */
  gap: ${props => (props.title ? "10px" : "0px")};
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
