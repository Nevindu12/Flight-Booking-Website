import React, {useEffect} from 'react'

import imageGrid from '../../assets/images-grid2.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {
    //use effect
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <div className='lounge container section'>
            <div className="sectionContainer grid">

                <div data-aos='fade-down' data-aos-duration='2500' className="imgDiv">
                    <img src={imageGrid} />
                </div>

                <div className="textDiv">
                    <h2 data-aos='fade-down' data-aos-duration='2500'>Unaccompanied Minor Lounge</h2>
                    <div className="grids grid">

                        <div data-aos='fade-down' data-aos-duration='3500' className="singleGrid">
                            <span className='gridTitle'>Help through the Airport</span>
                            <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations</p>
                        </div>

                        <div data-aos='fade-down' data-aos-duration='3500' className="singleGrid">
                            <span className='gridTitle'>Priority Boarding</span>
                            <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations</p>
                        </div>

                        <div data-aos='fade-down' data-aos-duration='3500' className="singleGrid">
                            <span className='gridTitle'>Care on the Flight</span>
                            <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations</p>
                        </div>

                        <div data-aos='fade-down' data-aos-duration='3500' className="singleGrid">
                            <span className='gridTitle'>Chauffeur-drive Service</span>
                            <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Lounge
