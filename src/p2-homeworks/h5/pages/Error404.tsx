import React from 'react'
import image from '../../../images/error_404.jpeg'

function Error404() {
    return (
        <div>
            <div>
                <img style={{width: "100%"}} src={image} alt="404 not found"/>
            </div>
        </div>
    )
}

export default Error404
