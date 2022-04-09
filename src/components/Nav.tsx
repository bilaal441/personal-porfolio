import Link from 'next/link'
import Image from 'next/image'

import { Header, StyleLogo } from '../styles/styledHeader'
import Logo from '../../imgs/logo.png'

import React, { useState, ReactNode } from 'react'
import NavList from './NavList'
import Menu from './Menu'
import styled from 'styled-components'
import{ mixin} from '../styles'
import { device , desktopApp} from '../styles/Breakpoint.style'
type Props = {
  children?: ReactNode
}

const StyledNav = styled.nav `
${mixin.flexBetween}
width: 100%;

z-index: 12; 


`




const DeskTopNavigation = styled.div `
${mixin.flexBetween}


ul {
  
  ${mixin.flexBetween}

  list-style: none;

 
  

  li {
    margin: 0rem  0.279rem;
    
  }
  a {
    display: inline-block;
    text-decoration: none;
    font-weight: 600;
    color: #E8E8EA;
    transition: 0.4s;
    padding:  0.694rem;
    font-size: 0.833rem;
    transition: all 0.25 ease-in-out;

    font-size:  0.694rem;

    &:hover {
      color: var(--clr-sky-blue);
    }
  }


  
}

@media ${desktopApp.tablet} {
    
display: none;


  
  }

  a.resume-link{
    ${mixin.inlineLink}

    padding: 0.75rem 1rem;

  margin: 0 1rem;




  }

` 








const MainNavigation = ({ children }: Props) => {
  

  return (
    <Header>

<StyledNav>

      <StyleLogo>
        <Link href="/" passHref>
          <a>
            <div>Bilal</div>
          </a>
        </Link>
      </StyleLogo>

      <DeskTopNavigation>
      <NavList />

<div>


<a
  href=""
  target="_blank"
  rel="noopener noreferrer"
  className='resume-link'
  
>
  resume
</a>


</div>


      </DeskTopNavigation>

      <Menu />
</StyledNav>
    </Header>
  )
}

export default MainNavigation
