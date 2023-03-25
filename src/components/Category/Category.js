import React from 'react'
import './category.css'

const Category = () => {
  return (
    <div className='category'>
      <ul>
        <li>Source</li>
        <li className='line'></li>
        <li>Applied</li>
        <li className='line'></li>
        <li>In-touch</li>
        <li className='line'></li>
        <li>Interview</li>
        <li className='line'></li>
        <li>Hired</li>
        <li className='line'></li>
        <li>Rejected</li>
      </ul>
    </div>
  )
}

export default Category
