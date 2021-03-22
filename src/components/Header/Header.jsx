import React from 'react'
import classes from './Header.module.scss'

const Header = () => {
  return (
    <div
      className={`${classes.fixedHeader} shadow-lg`}
    >
      <span>
        React-G
      </span>
    </div>
  )
}

export default Header
