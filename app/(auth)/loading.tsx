import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center w-full min-h-[40vh]'>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading;