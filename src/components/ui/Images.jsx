import React from 'react'

const Images = ({src, alt="img", className, onClick}) => {
  return (
    <img src={src} alt={alt} className={className} onClick={onClick} />
  )
}

export default Images