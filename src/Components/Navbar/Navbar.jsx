import React, {useState} from 'react'

import { SiConsul } from 'react-icons/si'
import { BsPhoneVibrate } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'

import logo from '../../assets/logo.png'

const Navbar = () => {
    const [active, setActive] = useState('navBarMenu')
    const showNavBar = ()=> {
        setActive('navBarMenu showNavBar')
    }

    const removeNavBar = ()=> {
        setActive('navBarMenu')
    }
    


    return (
        <div className='navBar flex'>

            <div className="navBarOne flex">
                <div>
                    <SiConsul className='icon' />
                </div>

                <div className='none flex'>
                    <li className='flex'> <BsPhoneVibrate /> Support</li>
                    <li className='flex'> <AiOutlineGlobal /> Languages</li>
                </div>

                <div className="atb flex">
                    <span>Sign IN</span>
                    <span>Sign OUT</span>
                </div>


            </div>

            <div className="navBarTwo flex">
            
                <div className="logoDiv">
                    <img src={logo} className='Logo' />
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem">About</li>
                        <li onClick={removeNavBar} className="listItem">About</li>
                        <li onClick={removeNavBar} className="listItem">Offers</li>
                        <li onClick={removeNavBar} className="listItem">Seats</li>
                        <li onClick={removeNavBar} className="listItem">Destinations</li>
                        <li onClick={removeNavBar} className="listItem">Home</li>
                    </ul>

                    <button onClick={removeNavBar} className='btn flex btnOne'>Contact</button>
                </div>

                <button className='btn flex btnTwo'>Contact</button>

                <div onClick={showNavBar} className='toggleIcon'>
                    <CgMenuGridO className='icon' />
                </div>


            </div>


        </div>
    )
}

export default Navbar 
