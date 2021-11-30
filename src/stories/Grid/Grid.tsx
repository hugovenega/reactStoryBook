import React from 'react';

export const GridComponent =() => {
  return(
    <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 bg-green-400 h-9/12 w-9/12 p-1 rounded-lg">
    <div className='bg-green-100 h-20 text-center p-1 rounded-lg font-bold text-2xl text-green-700'>
      1
    </div>
    <div className="col-start-3 bg-green-100 h-20 text-center p-1 rounded-lg font-bold text-2xl text-green-700">
      2
    </div>
    <div className='bg-green-100 h-20 text-center p-1 rounded-lg font-bold text-2xl text-green-700'>
      3
    </div>
    <div className='bg-green-100 h-20 text-center p-1 rounded-lg font-bold text-2xl text-green-700'>
      4
    </div>
    <div className="row-start-1 col-start-2 col-span-2 bg-green-100 h-20 text-center p-1 rounded-lg font-bold text-2xl text-green-700">
      5
    </div>
  </div>
  )
};