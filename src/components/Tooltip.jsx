import React from 'react'

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative inline-block group">
      {children}
      <div className="absolute z-10 hidden group-hover:block bg-gray-700 text-white text-xs rounded p-2 bottom-full mb-1 w-[200px]">
        {text}
      </div>
    </div>
  )
}

export default Tooltip