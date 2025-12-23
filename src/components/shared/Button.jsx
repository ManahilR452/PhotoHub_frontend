import React from 'react'
import './Button.css'

function Button({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary',
  size = 'medium',
  icon,
  disabled = false,
  className = '',
  ...props 
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button button-${variant} button-${size} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  )
}

export default Button