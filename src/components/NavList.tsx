import Link from "next/link"

import { useContext, useRef } from "react"
import { UiContext } from "../store/isActiveContext"

import { IconType } from "react-icons"

import { useRouter } from "next/router"

type props = {
  activeColor: string

  url: string
  name: string
  Icon: IconType
}

const NavList = ({ name, url, Icon }: props) => {
  const { setManuIsActive } = useContext(UiContext)

  const navigateHandler = () => setManuIsActive(false)

  const router = useRouter()

  return (
    <ul>
      <li key={url} onClick={navigateHandler}>
        <Link href={url} passHref>
          <a className="nav-link">
            <Icon />
            <span
              className={`nav-text ${router.asPath === url ? "active" : ""} `}
            >
              {name}
            </span>
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default NavList
