import React, {useState} from 'react'
import { BackButton, Spin } from '../components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddGoods = () => {
  const [title, setTitle] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSaveGood = () => {
    const data = {
      title,
      quantity,
      price,
    }
    setLoading(true)
    axios
      .post('http://localhost:2000/goods',data)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((err) => {
        setLoading(false)
        alert('Error has happened, please check console')
        console.log(err)
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Add Goods</h1>
      {
        loading ? <Spin /> : ''
      }
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Name of Goods</label>
          <input 
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            placeholder='Name of Goods'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Quantity</label>
          <input 
            type='number'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            placeholder='Quantity'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Price</label>
          <input 
            type='number'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            placeholder='Price'
          />
        </div>
        <button className='p-2 bg-sky-500 m-8 hover:bg-sky-300' onClick={handleSaveGood}>
          Save
        </button>
      </div>
    </div>
  )
}

export default AddGoods