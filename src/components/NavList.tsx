import { configData } from '../configUi'
import Link from 'next/link'
import styled from 'styled-components'




const NavList = () => {
  const { navLinks } = configData
  return (
    <ul>
      {navLinks.map(({ name, url }) => (
        <li key={url}>
          <Link href={url}>{name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavList
