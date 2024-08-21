import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Table = ({ refresh }) => {
  const [data, setData] = useState([]);
  console.log(data)


  // wait for the data and go in the next line of code
  const fetchData =async() =>{
    await axios.get("http://localhost:5500/api/getAllUsers")
    .then((res)=>{

      //storing the data in res.data
      setData(res.data)
    })

    .catch((err)=>{
      console.log(err)
    })

  }

  // using [] helps in getting only one data instead of infinite
  useEffect(()=>{
    fetchData()
  },[refresh])



  return (
    <div >
     
      <table>
        <thead>
            <tr>
                <th className='border-2 border-black'>Name</th>
                <th className='border-2 border-black'>Email</th>
                <th className='border-2 border-black'>Password</th>
                <th className='border-2 border-black'>Address</th>
                <th className='border-2 border-black'>Phone</th>
                <th className='border-2 border-black'>Hobby</th>
                <th className='border-2 border-black'>Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index)=>(
            <tr key={index}>
                <td className='border-2 border-black'>{item.name}</td>
                <td className='border-2 border-black'>{item.email}</td>
                <td className='border-2 border-black'>{item.password}</td>
                <td className='border-2 border-black'>{item.address}</td>
                <td className='border-2 border-black'>{item.phone}</td>
                <td className='border-2 border-black'>{item.hobby}</td>
                <td className='border-2 border-black'>
                  <button className='bg-green-400'>Update</button>
                  <button className='bg-red-400'>Delete</button>
                </td>
            </tr>))}
        </tbody>
      </table>

    </div>
  )
}

export default Table
