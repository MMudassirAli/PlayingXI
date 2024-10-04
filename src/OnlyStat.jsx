import React from 'react'

const OnlyStat = ({name,role,stats}) => {
  return (
    <>
    <h3 className='text-center fw-medium'>{name}</h3>
    <p className="text-primary text-center fw-bold mt-0 ">{role}</p>
    <button className='btn btn-success border-0 rounded-pill w-100'>
    <a target='_blank' className='text-decoration-none fw-bold fs-5 text-dark' href={stats}>Player Stats</a>
    </button>
    </>
  )
}

export default OnlyStat