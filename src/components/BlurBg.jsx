import React from 'react'

const BlurBg = (props) => {
  return (
    <div onClick={props.func} className={props.state ? ' bg-black/10 absolute h-full top-0 left-0 w-[100vw] backdrop-blur-sm' : 'hidden'} >
    </div>
  )
}

export default BlurBg