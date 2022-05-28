import Link from "next/link"
import styled from "styled-components"
import { useContext } from "react"
import { UiContext } from "../store/isActiveContext"
import { Icon } from "../../interface"
import { icons } from "react-icons"
import { configData } from "../configUi"

import { useState, useEffect } from "react"

type props = {
  path: string
  activeColor: string
}

const NavList = ({ path, activeColor }: props) => {
  const { navLinks, colors } = configData
  const { setManuIsActive } = useContext(UiContext)

  const navigateHandler = () => setManuIsActive(false)

  const ScrollHandler = (e: React.MouseEvent) => {
    const target = e!.currentTarget!.getAttribute("href")!.replace("/", "")

    if (!target) return
    console.log(target)

    const location = document!.querySelector(target) as HTMLElement | null
    if (location !== null)
      window.scrollTo({
        left: 0,
        top: location.offsetTop - 100,
      })
  }

  return (
    <ul>
      {navLinks.map(({ name, url, Icon }) => (
        <li key={url} onClick={navigateHandler}>
          <Link href={url} passHref>
            <a className="nav-link" onClick={ScrollHandler}>
              <Icon />
              <span
                className={`nav-text `}
                style={{
                  color: `${path === url ? activeColor : ""}`,
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
