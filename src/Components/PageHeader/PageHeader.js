import React from 'react'
import Container from '../Container/container'
import { NavLink } from 'react-router-dom'
import './PageHeader.css'

const PageHeader = () => {
  return (
    <div className='page-header'>
        <Container> 
         <nav className='main-navigation'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <NavLink to='/counter'>Counter Page</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/news'>News Page</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/cities'>Cities Page</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/cars'>Cars Page</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/contact-us'>Contact Us Page</NavLink>
            </li>
          </ul>
         </nav>
        </Container>
    </div>
  )
}

export default PageHeader