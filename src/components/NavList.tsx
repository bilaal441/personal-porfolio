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
  // const [isActive, setIactive] = useState("")
  const navigateHandler = () => setManuIsActive(false)

  const router = useRouter()

  // const scrollHandler = (e: React.MouseEvent) => {
  //   e.preventDefault()
  //   const spans = document!.querySelectorAll(
  //     `.nav-text`,
  //   ) as NodeListOf<Element> | null

  //   spans?.forEach((el) => {
  //     el.classList.remove("active")
  //   })

  //   const target = e!.currentTarget!.getAttribute("href")!.replace("/", "")

  //   if (!target) return

  //   const location = document!.querySelector(target) as HTMLElement | null
  //   if (url === `/${target}`) nameRef.current?.classList.add("active")

  //   if (location !== null) {
  //     // window.scrollTo({
  //     //   left: 0,
  //     //   top: location.offsetTop - 100,
  //     //   behavior: "smooth",
  //     // })

  //     location.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     })
  //   }
  // }

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
