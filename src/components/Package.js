import React from 'react'

const Package = ({ tour }) => {
    let { title, description, img, price } = tour

    return (

        <div className='package'>
            <div className='imageSection'>
                <img src={`/images/Home/${img}`} alt={'test'} />
            </div>
            <div className='detailSection'>
                <div className='tourName'>{title}</div>
                <div className='tourDescription'>{description}</div>
                <span>{price}</span>
            </div>
        </div>

    )
}

export default Package