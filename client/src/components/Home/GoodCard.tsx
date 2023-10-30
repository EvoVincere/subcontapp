import React from 'react'
import { GoodsCardProps } from '../../types'
import GoodSingleCard from './GoodSingleCard'
const GoodCard: React.FC<GoodsCardProps>= ({goods}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
            goods.map((item) => (
                <GoodSingleCard key={`${item['_id']}`} good={item}/>
            ))
        }
    </div>
  )
}

export default GoodCard