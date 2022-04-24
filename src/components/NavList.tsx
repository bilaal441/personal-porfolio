import { configData } from '../configUi'
import Link from 'next/link'
import styled from 'styled-components'
import { useContext } from 'react'
import { UiContext } from '../store/isActiveContext'

const NavList = () => {
  const { navLinks } = configData

  const { isActive, toggleIsActive, setManuIsActive } = useContext(UiContext)

  const navigateHandler = () => setManuIsActive(false)
  return (
    <ul>
      {navLinks.map(({ name, url }) => (
        <li key={url} onClick={navigateHandler}>
          <Link href={url}>{name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavList
