import React from 'react'

import c from './header.module.scss';

function Header() {
  return (
    <header className={c.wrapper}>
      <div className={c.header}>
        Header
      </div>
      <div className={`${c.corner} ${c['corner-left']}`}>
        <div className={`${c.border} ${c['border-left']}`} />
      </div>
      <div className={`${c.corner} ${c['corner-right']}`}>
        <div className={`${c.border} ${c['border-right']}`} />
      </div>
    </header>
  )
}

export default Header