import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { Spin } from '../components'
import { GoodsProps } from '../types'

const ShowGood: React.FC = () => {
  const [good, setGood] = useState<GoodsProps>({
    _id: 0,
    title: '',
    quantity: 0,
    price: 0,
    createdAt: null,
    updatedAt: null,
  })
  const [loading, setLoading] = useState(false)
  const {id} = useParams()

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:2000/goods/${id}`)
      .then((res) => {
        setGood(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [id])

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Good</h1>
      {
        loading ? (
          <Spin />
        ) : (
          <div className='flex flex-col border-2 border-sky-500 rounded-xl w-fit p-4'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Id =</span>
              <span>{`${good._id}`}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Name of goods =</span>
              <span className='uppercase'>{good.title}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Quantity =</span>
              <span>{`${good.quantity}`}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Price =</span>
              <span>{`Rp ${good.price}`}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Time Created =</span>
              {good.createdAt ? new Date(good.createdAt).toString() : "Date not available"}
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Last Update Time =</span>
              {good.updatedAt ? new Date(good.updatedAt).toString() : "Date not available"}
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ShowGood