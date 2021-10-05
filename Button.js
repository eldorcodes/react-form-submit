import React from 'react'

export default function Button({ title, color, deleteOne}) {

  return (
    <button
    onClick={deleteOne}
    style={{
      backgroundColor:color,
      color:'#fff',
      padding:5
    }}>{title}</button>
  )
}
