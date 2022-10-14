import React, { useState } from 'react'
import Packages from '../Home/Packages'

const TourList = () => {
    let [ searchTerm, setSearchTerm ] = useState('');
    let tours = [
        {
            id: "1",
            title: "Tour One",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: "IMG_0693_Banner.jpg",
            price: "1000"
        },
        {
            id: "2",
            title: "Tour Two",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: "IMG_0693_Banner.jpg",
            price: "2000"
        },
        {
            id: "3",
            title: "Tour Three",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: "IMG_0693_Banner.jpg",
            price: "3000"
        },
    ]

    return (
        <div className='tour-list'>
            <br /><br /><br /><br /><br /><br /><br />
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <Packages tours={tours} searchTerm={searchTerm} />
        </div>
    )
}

export default TourList