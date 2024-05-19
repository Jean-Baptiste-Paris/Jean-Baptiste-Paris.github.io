import React from 'react'
import { Link } from 'react-router-dom'

function GlassButton({
  link = '',
  anchor = '',
  children,
}: {
  link?: string
  anchor?: string
  children?: React.ReactNode
}) {
  const commonClasses = `
    z-10 p-4 rounded-lg 
    bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 
    border border-gray-50 shadow-xl
    text-gray-600 font-semibold text-lg uppercase
    transition duration-300 ease-in-out 
    transform hover:scale-105 hover:bg-opacity-30 hover:shadow-3xl
  `

  if (link) {
    return (
      <Link to={link} className={commonClasses}>
        {children}
      </Link>
    )
  }
  if (anchor) {
    return (
      <a href={anchor} className={commonClasses}>
        {children}
      </a>
    )
  }
  return <button className={commonClasses}>{children}</button>
}

export default GlassButton
