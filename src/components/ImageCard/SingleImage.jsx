import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'; 

export default function SingleImage(prop) {
    return (
        <div  className='imageDisplaySection'>
            <Container fluid className='displayImageContainer'>
                <Row className='displayImage__wrapper'>
                    <Col sm='12' >
                        <img src={prop.img} alt="" className='displayImage'/>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

