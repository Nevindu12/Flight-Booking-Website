import React from 'react'

//import destination image
import paris from '../../assets/paris.jpg'
import newyork from '../../assets/newyork.jpg'
import london from '../../assets/london.jpg'
import dubai from '../../assets/dubai.jpg'

//import traveler image
import traveler1 from '../../assets/user1.jpg'
import traveler2 from '../../assets/user2.jpg'
import traveler3 from '../../assets/user3.jpg'
import traveler4 from '../../assets/user4.jpg'

const travelers = [
    {
        id: 1,
        destinationImage: paris,
        travelerImage: traveler1,
        travelerName: 'IsraTech',
        socialLink: '@isratech8'
    },

    {
        id: 2,
        destinationImage: newyork,
        travelerImage: traveler2,
        travelerName: 'Wilson Lindsey',
        socialLink: '@wilsonlindsey'
    },

    {
        id: 3,
        destinationImage: london,
        travelerImage: traveler3,
        travelerName: 'Nicole Saan',
        socialLink: '@nicolesaan'
    },

    {
        id: 4,
        destinationImage: dubai,
        travelerImage: traveler4,
        travelerName: 'Narsha Lamar',
        socialLink: '@narshalamar'
    }
]

const Travelers = () => {
    return (
        <div className='travelers container section'>
            <div className="sectionContainer">
                <h2>Top travelers of this month!</h2>

                <div className="travelersContainer grid">

                    {
                        travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) => {
                            return (
                                <div key={id} className="singleTraveler">
                                    <img src={destinationImage} className='destinationImage' />
                                    <div className="travelerDetails">
                                        <div className="travelersPicture">
                                            <img src={travelerImage} className='travelerImage' />
                                        </div>
                                        <div className="travelerName">
                                            <span>{travelerName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Travelers
