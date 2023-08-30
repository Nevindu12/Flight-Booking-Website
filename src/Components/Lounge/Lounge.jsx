import React from 'react'

import imageGrid from '../../assets/images-grid2.png'

const Lounge = () => {
    return (
        <div className='lounge container section'>
            <div className="sectionContainer grid">

                <div className="imgDiv">
                    <img src={imageGrid} />
                </div>

                <div className="textDiv">
                    <h2>Unaccompanied Minor Lounge</h2>
                    <div className="grids grid">

                        <div className="singleGrid">
                            <span className='gridTitle'>Help through the Airport</span>
                            <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations</p>
                        </div>

                        <div className="singleGrid">
                            <span className='gridTitle'>Priority Boarding</span>
                            <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations</p>
                        </div>

                        <div className="singleGrid">
                            <span className='gridTitle'>Care on the Flight</span>
                            <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations</p>
                        </div>

                        <div className="singleGrid">
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
