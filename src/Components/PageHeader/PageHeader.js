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
              <NavLink to='/api/chuck-norris'>Chuck API</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/api/dogs'>Dogs API</NavLink>
            </li>

            <li className='nav-item'>
              <NavLink to='/counter'>Counter</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/news'>News</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/cities'>Cities</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/cars'>Cars</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/contact-us'>Contact Us</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/todo'>Todo</NavLink>
            </li>
          </ul>
         </nav>
        </Container>
    </div>
  )
}

export default PageHeader