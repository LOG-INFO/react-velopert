import classNames from 'classnames'
import React from 'react'
import './Button.scss'

function Button({ children, size, color, onClick }) {
  return (
    <button className={classNames('Button', size, color)} onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  size: 'medium',
  color: 'gray',
}

export default Button
