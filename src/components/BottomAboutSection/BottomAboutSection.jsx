import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import TruncatedText from './TruncatedText'

function BottomAboutSection() {
    return (
        <div className="bottomAboutSection__container">
            <Container fluid className="bottomAboutSection__wrapper">
                <Row>
                    <Col md='12' className="bottomAboutSection__title">
                        <p>woozeee - The No. 1 Market Place For Smart People</p>
                    </Col>
                </Row>
                <Row>
                    <Col md='12' className="bottomAboutSection__text">
                    <TruncatedText/>                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BottomAboutSection
