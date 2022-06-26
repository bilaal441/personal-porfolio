import Link from "next/link"

import { useContext, useRef } from "react"
import { UiContext } from "../store/isActiveContext"

import { IconType } from "react-icons"

import { useRouter } from "next/router"

type props = {
  url: string
  name: string
  Icon: IconType
  styleCss: {}
}

const NavList = ({ name, url, Icon, styleCss }: props) => {
  const { setManuIsActive } = useContext(UiContext)

  const navigateHandler = () => setManuIsActive(false)

  const router = useRouter()

  return (
    <li key={url} onClick={navigateHandler} style={{ ...styleCss }}>
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
  )
}

export default NavList
