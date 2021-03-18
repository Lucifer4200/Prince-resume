import React from 'react'
import Cards from './Cards'
import { Container } from 'react-bootstrap'
import img1 from '../images/card/01.jpg'
import img2 from '../images/card/02.jpg'
import img3 from '../images/card/03.jpg'

function CardItem() {
    return (
        <>
            <Container>
               <div className="section-wrapper overflow-hidden">
                <div className="row">
                        <div className="col-md-4 col-12 mb-4 mb-sm-0">
                            <Cards imgSrc={ img1 } title='Grapic Design' />
                        </div>
                        <div className="col-md-4 col-12 mb-4 mb-sm-0">
                            <Cards imgSrc={ img2 } title='Web Design' />
                        </div>
                        <div className="col-md-4 col-12">
                            <Cards imgSrc={ img3 } title='Web Development' />
                        </div>
                    </div>
               </div>
            </Container>
        </>
    )
}

export default CardItem
