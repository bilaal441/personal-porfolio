import Link from "next/link"

import { useContext, useRef, useEffect } from "react"
import { UiContext } from "../store/isActiveContext"

import { IconType } from "react-icons"

type props = {
  activeColor: string

  url: string
  name: string
  Icon: IconType
}

const NavList = ({ name, url, Icon }: props) => {
  const { setManuIsActive } = useContext(UiContext)
  const linkRef = useRef<HTMLAnchorElement>(null)
  const nameRef = useRef<HTMLAnchorElement>(null)
  const navigateHandler = () => setManuIsActive(false)

  const scrollHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    const spans = document!.querySelectorAll(
      `.nav-text`,
    ) as NodeListOf<Element> | null

    spans?.forEach((el) => {
      el.classList.remove("active")
    })

    const target = e!.currentTarget!.getAttribute("href")!.replace("/", "")

    if (!target) return

    const location = document!.querySelector(target) as HTMLElement | null
    if (url === `/${target}`) nameRef.current?.classList.toggle("active")

    if (location !== null) {
      window.scrollTo({
        left: 0,
        top: location.offsetTop - 100,
      })
    }
  }

  return (
    <ul>
      <li key={url} onClick={navigateHandler}>
        <Link href={url} passHref>
          <a className="nav-link" ref={linkRef} onClick={scrollHandler}>
            <Icon />
            <span className={`nav-text `} ref={nameRef}>
              {name}
            </span>
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default NavList
