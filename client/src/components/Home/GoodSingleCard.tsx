import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {PiBookOpenTextLight} from 'react-icons/pi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import {ImPriceTag} from 'react-icons/im'
import {BiShow} from 'react-icons/bi'
import { GoodsSingleCardProps } from '../../types'
import GoodModal from './GoodModal'
const GoodSingleCard:React.FC<GoodsSingleCardProps> = ({good}) => {
    const [showModal, setShowModal] = useState(false)
  return (
    <div key={`${good['_id']}`} className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
                    <h2 className='absolute top-1 right-2 w-fit px-4 py-1 bg-red-300 rounded-lg'>
                       {` ${good['quantity'].toLocaleString('id-ID')} Pcs`}
                    </h2>
                    <h4 className='my-2 text-gray-500'>{`${good['_id']}`}</h4>
                    <div className='flex justify-start items-center gap-x-2'>
                        <PiBookOpenTextLight className='text-red-300 text-2xl' />
                        <h2 className='my-1 capitalize'>{`${good['title']}`}</h2>
                    </div>
                    <div className='flex justify-start items-center gap-x-2'>
                        <ImPriceTag className='text-red-300 text-2xl'/>
                        <h2 className='my-1 capitalize'>{`Rp ${good['price'].toLocaleString('id-ID')} / pcs`}</h2>
                    </div>
                    <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                        <BiShow 
                            className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                            onClick={() => setShowModal(true)}
                        />
                        <Link to={`/goods/details/${good['_id']}`}>
                            <BsInfoCircle className='text-2xl text-green-700 hover:text-black' />
                        </Link>
                        <Link to={`/goods/edit/${good['_id']}`}>
                            <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                        </Link>
                        <Link to={`goods/delete/${good['_id']}`}>
                            <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                        </Link>
                    </div>
                    {
                        showModal && (
                            <GoodModal good={good} onClose={() => setShowModal(false)} />
                        )
                    }
                </div>
  )
}

export default GoodSingleCard