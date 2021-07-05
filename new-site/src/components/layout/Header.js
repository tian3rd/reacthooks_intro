import { Link } from "gatsby"
import React from "react"

const menuData = [
  {
    title: "Courses",
    icon: "/images/icons-part/courses.svg",
    link: "/courses",
  },
  {
    title: "Tutorials",
    icon: "/images/icons-part/tutorials.svg",
    link: "/tutorial",
  },
  {
    title: "Pricing",
    icon: "/images/icons-part/pricing.svg",
    link: "/pricing",
  },
]

export default function Header() {
  return (
    <>
      {menuData.map((item, index) => (
        // map with key?
        <Link to={item.link} key={index}>
          <img src={item.icon} alt={item.title} />
          {item.title}
        </Link>
      ))}
    </>
  )
}
