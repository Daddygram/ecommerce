import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-nav">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-desc">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Quia vel sapiente ipsa expedita maiores atque! Corrupti est 
                eligendi labore deserunt cumque blanditiis similique corporis 
                earum perspiciatis vel! Consequuntur odit ex pariatur consectetur. 
                Sequi, exercitationem nobis? Quia, corporis sint? Facilis 
                voluptates autem nam corrupti doloremque amet delectus quae placeat commodi deserunt.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur maiores, 
                    in deserunt nulla et reprehenderit eveniet fugit sunt molestiae ad, 
                    impedit corporis unde minima, hic expedita tenetur. Iusto, magnam!</p>
        </div>
    </div>
  )
}

export default DescriptionBox