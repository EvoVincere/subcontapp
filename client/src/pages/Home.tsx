import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Spin from '../components/spin'
import {Link} from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'


const Home = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(false)

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
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl my-8'>Goods List</h1>
            <Link to='/goods/add'>
                <MdOutlineAddBox className='text-sky-800 text-4xl' />
            </Link>
        </div>
        {
            loading ? (
                <Spin />
            ) : (
                <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-500 rounded-md'>No</th>
                            <th className='border border-slate-500 rounded-md'>Title</th>
                            <th className='border border-slate-500 rounded-md'>Quantity</th>
                            <th className='border border-slate-500 rounded-md'>Price</th>
                            <th className='border border-slate-500 rounded-md'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            goods.map((good, index) => (
                                <tr key={good['_id']} className='h-8'>
                                    <td className='border border-slate-600 rounded-md text-center'>
                                        {index + 1}
                                    </td>
                                    <td className='border border-slate-600 rounded-md text-center uppercase'>
                                        {good['title']}
                                    </td>
                                    <td className='border border-slate-600 rounded-md text-center'>
                                        {good['quantity']}
                                    </td>
                                    <td className='border border-slate-600 rounded-md text-center'>
                                        {good['price']}
                                    </td>
                                    <td className='border border-slate-600 rounded-md text-center'>
                                        <div className='flex justify-center gap-x-4'>
                                            <Link to={`/goods/details/${good['_id']}`}>
                                                <BsInfoCircle className='text-2xl text-green-700' />
                                            </Link>
                                            <Link to={`/goods/edit/${good['_id']}`}>
                                                <AiOutlineEdit className='text-2xl text-green-700' />
                                            </Link>
                                            <Link to={`/goods/delete/${good['_id']}`}>
                                                <MdOutlineDelete className='text-2xl text-green-700' />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )
        }
    </div>
  )
}

export default Home