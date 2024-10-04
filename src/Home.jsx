import React from 'react'
import './index.css';
import './data';
import PlayerCard from './PlayerCard';
import { players } from './data';

const Home = () => {

    // const handleInfo = () => {

    // }

  return (
    <>
    <div className="background-overlay">

    <h1 className="text-center display-1 m-0 ">My Playing XI</h1>
    
    <div className="container content">

      <div className="row mt-5">
        {
            players?.map?.((item,index)=>{
                return <PlayerCard {...item} key={index} />
            })
        }
      </div>

    </div>

    </div>
    </>
  )
}

export default Home