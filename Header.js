import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Header = ({ title,showForm, color }) => {
  return (
    <div>
      <header style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        {title}
        <FaPlus
        style={{
          cursor:'pointer',
          color:color
        }}
        onClick={showForm}/>
      </header>
    </div>
  )
}
export default Header