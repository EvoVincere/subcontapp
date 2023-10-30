import React, {useState} from 'react'
import { BackButton, Spin } from '../components'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import {useSnackbar} from 'notistack'

const DeleteGoods = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
  const {enqueueSnackbar} = useSnackbar()

  const handleDeleteGoods = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:2000/goods/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Goods Deleted Succesfully', {variant:'success'})
        navigate('/')
      })
      .catch((err) => {
        setLoading(false)
        enqueueSnackbar('Error', {variant:'error'})
        alert('Error has happened, please check console')
        console.log(err)
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {
        loading ? <Spin /> : ''
      }
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure delete this goods ?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteGoods}
        >
          Sure, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteGoods