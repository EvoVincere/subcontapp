import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {ImPriceTag} from 'react-icons/im'
import { GoodsModal } from '../../types'
import {PiBookOpenTextLight} from 'react-icons/pi'
const GoodModal: React.FC<GoodsModal> = ({good, onClose}) => {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
        onClick={onClose}
    >
        <div onClick={(e) => e.stopPropagation()}
            className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
        >
            <AiOutlineClose 
                className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                onClick={onClose}
            />
            <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
                       {` ${good['quantity']}`}
            </h2>
            <h4 className='my-2 text-gray-500'>{`${good['_id']}`}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl' />
                <h2 className='my-1 capitalize'>{`${good['title']}`}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <ImPriceTag className='text-red-300 text-2xl'/>
                <h2 className='my-1 capitalize'>{`Rp ${good['price']} / pcs`}</h2>
            </div>
            <p className='mt-4'>tes123</p>
            <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos, tempora sequi perspiciatis, est illo nostrum tempore, atque laudantium sint voluptatum consequatur repellat magnam ullam suscipit reprehenderit neque in odit.</p>
        </div>
    </div>
  )
}

export default GoodModal