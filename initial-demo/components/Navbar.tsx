import React from 'react'
import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'About',
      href: '/about'
    },
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'Pricing',
      href: '/pricing'
    },
]

const Navbar = () => {
  return (
    <div>
      <nav className={styles.menu}>
        {menuItems.map((item, i) => (
          <ActiveLink 
            text={item.text} 
            href={item.href} 
            key={i}
          />
        ))}
      </nav>
    </div>
  )
}

export default Navbar