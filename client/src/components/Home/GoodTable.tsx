import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import { GoodsTableProps } from '../../types'
import { MdOutlineDelete} from 'react-icons/md'




const GoodTable: React.FC<GoodsTableProps> = ({goods}) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-500 rounded-md'>No</th>
                            <th className='border border-slate-500 rounded-md'>Title</th>
                            <th className='border border-slate-500 rounded-md'>Quantity</th>
                            <th className='border border-slate-500 rounded-md'>Price</th>
                            <th className='border border-slate-500 rounded-md'>Total Price</th>
                            <th className='border border-slate-500 rounded-md'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            goods.map((good, index) => (
                                <tr key={`${good['_id']}`} className='h-8'>
                                    <td className='border border-slate-600 rounded-md text-center'>
                                        {index + 1}
                                    </td>
                                    <td className='border border-slate-600 rounded-md text-center capitalize'>
                                        {good['title']}
                                    </td>
                                    <td className='border border-slate-600 rounded-md text-center'>
                                        {`${good['quantity']}`}
                                    </td>
                                    <td className='border border-slate-600 rounded-md text-center'>
                                        {`Rp ${good['price'].toLocaleString('id-ID')} / Pcs`}
                                    </td>
                                    <td className='border border-slate-600 rounded-md text-center'>
                                    {`Rp ${(good['quantity'].valueOf() * good['price'].valueOf()).toLocaleString('id-ID')}`}
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

export default GoodTable