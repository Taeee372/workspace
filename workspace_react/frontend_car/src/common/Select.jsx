import React from 'react'

const Select = ({size='80px', children, ...props}) => {
  return (
    <select
      style={{width : size}}
      {...props}
    >
      {children}
    </select>
  )
}

export default Select