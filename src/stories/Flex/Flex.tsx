import React from 'react';

export const FlexComponent =() => {
  return(
    <div className="flex flex-wrap gap-4 bg-blue-400 h-9/12 w-9/12 p-1 rounded-lg">
    <div className='bg-blue-100 w-9/12 h-20 text-center p-1 rounded-lg font-bold text-2xl text-green-700'>
      1
    </div>
    <div className=" bg-blue-100 w-52 h-20 text-center p-1 rounded-lg font-bold text-2xl text-green-700">
      2
    </div>
    <div className=' bg-blue-100 w-1/3 h-20 text-center p-1 rounded-lg font-bold text-2xl text-green-700'>
      3
    </div>
    <div className='bg-blue-100 w-2/4 h-20 text-center p-1 rounded-lg font-bold text-2xl text-green-700'>
      4
    </div>
    <div className=" bg-blue-100 w-full h-20 text-center p-1 rounded-lg font-bold text-2xl text-green-700">
      5
    </div>
  </div>
  )
};