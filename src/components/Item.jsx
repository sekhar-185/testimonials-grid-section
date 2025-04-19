import React from 'react'


const Item = ({name,image,text1,text2}) => {
  return (
    <div>
      <div className='flex'>
        <img src={image} alt="" className='w-12 rounded-full mr-5' />
        <div>
            <h2 className='text-[17px] font-medium'>{name}</h2>
             <p className='text-sm'>Verified Graduate</p>
        </div>
      </div>
       <p>{text1}</p>
       <p>{text2}</p>
    </div>
  )
}

export default Item
