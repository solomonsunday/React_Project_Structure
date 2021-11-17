import React from "react";
import styles from "./FeaturedSection.module.css";
import { Container, Row, Col } from "react-bootstrap";
import FeaturedCard from "./FeaturedCard";
import laptop from "../../assets/images/Products/laptop.png";
import solarpanel from "../../assets/images/Products/solarpanel.png";
import wig from "../../assets/images/Products/wigs.png";
import gen from "../../assets/images/Products/gen.png";
import cabinet from "../../assets/images/Products/cabinet.png";
import trouser from "../../assets/images/Products/trouser.png";
import microwave from "../../assets/images/Products/microwave.png";
import shoe from "../../assets/images/Products/shoe.png";
import bag from "../../assets/images/Products/bag.png";
import headset from "../../assets/images/Products/headset.png";
import chair from "../../assets/images/Products/chair.png";


function FeaturedSection() {
  return (
    <div>
      <Container fluid className={styles.featureSectionContainer}>
        <Row>
          <Col md="12">
            <div className={styles.featureSectionTitle}>
              <p>Featured Categories</p>
            </div>
          </Col>
        </Row>
        <div className={styles.secondfeatureSectionWrapper}>
          <Row className={styles.featureRow}>
            <FeaturedCard featuredImage={laptop} featuredName={`Laptops`} />
            <FeaturedCard featuredImage={wig} featuredName={`Wigs`} />
            <FeaturedCard
              featuredImage={solarpanel}
              featuredName={`Solar panels`}
            />
            <FeaturedCard featuredImage={gen} featuredName={`Gen`} />
            <FeaturedCard featuredImage={cabinet} featuredName={`Cabinet`} />
            <FeaturedCard featuredImage={trouser} featuredName={`Trousers`} />
          </Row>

          <Row className={styles.featureRow}>
            <FeaturedCard
              featuredImage={microwave}
              featuredName={`Microwave`}
            />
            <FeaturedCard featuredImage={shoe} featuredName={`Shoes`} />
            <FeaturedCard featuredImage={bag} featuredName={`Bags`} />
            <FeaturedCard featuredImage={gen} featuredName={`Gen`} />
            <FeaturedCard featuredImage={headset} featuredName={`Headsets`} />
            <FeaturedCard featuredImage={chair} featuredName={`Chairs`} />
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default FeaturedSection;
