import React from 'react'
import NavBar from '../../NavBar'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='bannerContainer'>
                <div className='banner-overlay'>
                    <NavBar />
                    <h1>
                        <p>
                            Leisure
                        </p>
                        <p>
                            Travel
                        </p>
                    </h1>
                </div>
            </div>
        </div>
    ) 
}

export default Banner 

