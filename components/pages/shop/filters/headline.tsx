import React from 'react'

type Props = {
    filterNumber: number
}

const headline:React.FC<Props> = ({filterNumber}) => {
  return (
    <div className='text-xl	font-semibold leading-[30px] mb-3'>Filters ({filterNumber})</div>
  )
}

export default headline