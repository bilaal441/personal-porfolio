import { configData } from '../configUi'
import Link from 'next/link'
import styled from 'styled-components'
import { useContext } from 'react'
import { UiContext } from '../store/isActiveContext'
import { Icon } from '../../interface'
import { icons } from 'react-icons'

const NavList = () => {
  const { navLinks } = configData

  const { isActive, toggleIsActive, setManuIsActive } = useContext(UiContext)

  const navigateHandler = () => setManuIsActive(false)
  return (
    <ul>
      {navLinks.map(({ name, url, Icon }) => (
        <li key={url} onClick={navigateHandler}>
          <>
            // eslint-disable-next-line @next/next/link-passhref
            <Link href={url}>
              <Icon />
            </Link>

            <Link href={url}>{name}</Link>
          </>
        </li>
      ))}
    </ul>
  )
}

export default NavList