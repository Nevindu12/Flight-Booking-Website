import React from 'react'

//import destination image
import paris from '../../assets/paris.jpg'

//import traveler image
import traveler1 from '../../assets/user1.jpg'

const Travelers = () => {
    return (
        <div className='travelers container section'>
            <div className="sectionContainer">
                <h2>Top travelers of this month!</h2>

                <div className="travelersContainer grid">

                    <div className="singleTraveler">
                        <img src={paris} className='destinationImage'/>
                        <div className="travelerDetails">
                            <div className="travelersPicture">
                                <img src={traveler1} className='travelerImage'/>
                            </div>
                            <div className="travelerName">
                                <span>IsraTech</span>
                                <p>@isratech8</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Travelers
