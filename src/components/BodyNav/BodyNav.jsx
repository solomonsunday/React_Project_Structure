import React from 'react'
// import styles from './BodyNav.module.css'
import { Container, Row, Col} from 'react-bootstrap';

function BodyNav() {
    return (
        <div>
            <Container fluid className="bodyNav__container">
                <div>
                    <Row  className="row1">
                    <Col >
                        <div className="bodyNavGroup1">
                        <img src="/images/BodyNav/OfficialStores.svg" alt="" className="bodyNav__icon"/>
                        <span className="bodyNav__text">Official Stores</span>
                        </div>
                    </Col>

                    <Col>
                    <div className="bodyNavGroup"> 
                    <img src="/images/BodyNav/utilities.svg" alt="" className="bodyNav__icon"/>
                    <span className="bodyNav__text">woozeee utilities</span>
                    </div>
                    </Col>
                
                    <Col >
                    <div className="bodyNavGroup"> 
                    <img src="/images/BodyNav/dispatch.svg" alt="" className="bodyNav__icon"/>
                    <span className="bodyNav__text">woozeee express</span>
                    </div>
                    </Col>
                    <Col>
                    <div className="bodyNavGroup4">
                    <img src="/images/BodyNav/Events.svg" alt="" className="bodyNav__icon"/>
                    <span className="bodyNav__text">woozeee events</span>
                    </div>
                    </Col>
                </Row>
                </div>
                
            </Container>

        </div>
    )
}

export default BodyNav
