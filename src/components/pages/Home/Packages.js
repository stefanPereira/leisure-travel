import React from 'react'
import Package from '../../Package'

const Packages = ({ tours, searchTerm }) => {
    return (
        <div className='packages'>
            <div className='bestSelling'>
                Best Selling
            </div>
            <div className='packageList'> 
                {
                 tours.filter(tour => {
                    if (searchTerm === "") {
                        return true
                    } else if (
                        tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        tour.description.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                        return true
                    } else {
                        return false
                    }
                 }).map((tour, i) => (<Package tour={tour} key={i}/>))
                }</div>
           
        </div>
    )
}

export default Packages

