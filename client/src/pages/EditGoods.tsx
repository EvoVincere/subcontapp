import React, {useState, useEffect} from 'react'
import { BackButton, Spin } from '../components'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import {useSnackbar} from 'notistack'
const EditGoods = () => {
  const [title, setTitle] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
  const {enqueueSnackbar} = useSnackbar()

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:2000/goods/${id}`)
      .then((res) => {
        setQuantity(res.data.quantity)
        setPrice(res.data.price)
        setTitle(res.data.title)
        setLoading(false)
      }).catch((err) => {
        setLoading(false)
        alert('Error has happened, please check console')
        console.log(err)
      })
  },[id])

  const handleEditGood = () => {
    const data = {
      title,
      quantity,
      price,
    }
    setLoading(true)
    axios
      .put(`http://localhost:2000/goods/${id}`,data)
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Goods Has Edited',{variant:'success'})
        navigate('/')
      })
      .catch((err) => {
        setLoading(false)
        alert('Error has happened, please check console')
        enqueueSnackbar('Error', {variant:'error'})
        console.log(err)
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Goods</h1>
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
        <button className='p-2 bg-sky-500 m-8 hover:bg-sky-300' onClick={handleEditGood}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditGoods