import React from 'react'
import style from './Button.module.scss'

export default function Button({
    children, className = ""
}) {
  return (
    <button className={`${style.Button} ${className}`}>{children}</button>
  )
}
