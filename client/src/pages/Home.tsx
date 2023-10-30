import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Spin,GoodCard,GoodTable} from '../components/'
import {Link} from 'react-router-dom'
import {MdOutlineAddBox} from 'react-icons/md'


const Home = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(false)
    const [showType, setShowType] = useState('table')

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:2000/goods')
            .then((res) => {
                setGoods(res.data.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    },[])
  return (
    <div className='p-4'>
        <div className='flex justify-center items-center gap-x-4'>
            <button className='bg-sky-400 hover:bg-sky-300 px-4 py-1 rounded-lg'
                onClick={() => setShowType('table')}
            >
                Table
            </button>
            <button className='bg-sky-400 hover:bg-sky-300 px-4 py-1 rounded-lg'
                onClick={() => setShowType('card')}
            >
                Card
            </button>
        </div>

        <div className='flex justify-between items-center'>
            <h1 className='text-3xl my-8'>Goods List</h1>
            <Link to='/goods/add'>
                <MdOutlineAddBox className='text-sky-800 text-4xl' />
            </Link>
        </div>
        {
            loading ? (
                <Spin />
             ) : 
                showType === 'table' ? (
                <GoodTable
                    goods={goods} 
                />
            ) : (
                <GoodCard goods={goods}/>
            )
        }
    </div>
  )
}

export default Home