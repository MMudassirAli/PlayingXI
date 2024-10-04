import React, { useState } from 'react'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'
import { players } from './data';
import OnlyStat from './OnlyStat';

const PlayerCard = ({id, name, role, stats, image}) => {

    const [show,setShow] = useState(false);

  return (
    <>
    <div className="col-lg-4">
        <div className="card shadow p-3 border-0">
            <div className="d-flex justify-content-center align-items-end gap-5">
            <img className='photo' src={image} alt="" />
            {
                show ? <IoIosArrowDropupCircle onClick={()=>setShow(!show)} size={40} cursor={'pointer'} /> : <IoIosArrowDropdownCircle onClick={()=>setShow(!show)} size={40} cursor={'pointer'} />

            }
            </div>
            {
                show && (
                    <div className="info">
                        <OnlyStat name={name} role={role} stats={stats} />
                    </div>
                )
            }

            
        </div>
    </div>
    </>
  )
}

export default PlayerCard