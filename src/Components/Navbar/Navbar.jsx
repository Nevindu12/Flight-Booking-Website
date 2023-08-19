import React from 'react'

import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/si'
import {AiOutlineGlobal} from 'react-icons/si'

const Navbar = () => {
    return (
        <div className='navBar flex'>
            <div className="navBarOne flex">
                <div>
                    <SiConsul/>
                </div>

                <div className='none flex'>
                    <li className='flex'> <BsPhoneVibrate/> Support</li>
                    <li className='flex'> <AiOutlineGlobal/> Languages</li>
                </div>

                <div className="atb flex">
                    <span>Sign IN</span>
                    <span>Sign OUT</span>
                </div>


            </div>
        </div>
    )
}

export default Navbar 
