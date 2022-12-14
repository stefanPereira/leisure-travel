import React from 'react'
import Banner from './Banner'
import Packages from './Packages'

const Home = () => {
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
        <div>
            <Banner />
            <Packages tours={tours} searchTerm="" />
        </div>
    ) 
}

export default Home 

