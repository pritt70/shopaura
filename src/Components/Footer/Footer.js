import React from 'react'
import '../Footer/footer.css'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' md='6' className=' mb-4'>
            <div className="logo d-flex align-items-center column-gap-1">

              <div>
                <h1 className=' text-white'>ShopAura</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nesciunt! Hic officia odio eaque dolor ipsam ullam harum, excepturi amet.
            </p>
          </Col>

          <Col lg='3' md='3' className=' mb-4'>
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2' md='3' className=' mb-4'>
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4'>
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Contact</h4>
              <ListGroup className='footer_contact'>
                <ListGroupItem className=' ps-0 border-0'>
                  <span className=' d-flex align-items-center gap-2'>
                    <i className='ri-map-pin-line'></i>
                    <p>123, Pune Banglore Highway Pashan Exit, Baner, Pune</p>
                  </span>
                </ListGroupItem>

                <ListGroupItem className=' ps-0 border-0 '>
                  <span className=' d-flex align-items-center gap-2'>
                    <i className='ri-phone-line'></i>
                    <p>+919909151103</p>
                  </span>
                </ListGroupItem>

                <ListGroupItem className=' ps-0 border-0'>
                  <span className=' d-flex align-items-center gap-2'>
                    <i className='ri-mail-line'></i>
                    <p>info.shopaura@gmail.com</p>
                  </span>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className="footer_copyright">
              Copyright {year} developed by <span style={{ "color": "red" }}><i className="ri-heart-fill"></i></span> Prit Khokhani.
              All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
