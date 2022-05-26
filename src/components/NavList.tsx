import { configData } from "../configUi"
import Link from "next/link"
import styled from "styled-components"
import { useContext } from "react"
import { UiContext } from "../store/isActiveContext"
import { Icon } from "../../interface"
import { icons } from "react-icons"
import { useRouter } from "next/router"

import { useState, useEffect } from "react"

const NavList = () => {
  const { navLinks, colors } = configData
  const [active, setActive] = useState("")

  const { setManuIsActive } = useContext(UiContext)

  const navigateHandler = () => setManuIsActive(false)

  const router = useRouter()
  const { asPath } = router

  useEffect(() => {
    setActive(colors.skyBlue)
  }, [colors.skyBlue])

  // console.log(router)

  return (
    <ul>
      {navLinks.map(({ name, url, Icon }) => (
        <li key={url} onClick={navigateHandler}>
          <Link href={url}>
            <a className="nav-link">
              <Icon />
              <span
                className={`nav-text `}
                style={{
                  color: `${asPath === url ? active : ""}`,
                }}
              >
                {name}
              </span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavList
