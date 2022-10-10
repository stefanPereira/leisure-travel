import React from 'react'

const Package = () => {
    return (

        <div className='package'>
            <div className='imageSection'>
                <img src='../../../../../images/Home/IMG_0693_Banner.jpg' />
            </div>
            <div className='detailSection'>
                <div className='tourName'>
                    Yala Safari
                </div>
                <div className='tourDescription'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.

                </div>

            </div>

        </div>

    )
}
const Packages = () => {
    const packages = [1, 2, 3]
    return (
        <div className='packages'>
            <div className='bestSelling'>
                Best Selling
            </div>
            <div className='packageList'> 
                {
                 packages.map((item, i) => (<Package key={i}/>))
                }</div>
           
        </div>
    )
}

export default Packages

