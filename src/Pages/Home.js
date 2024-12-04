import React, { useEffect, useState } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import '../Style/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Service from '../service/Service'
import ProductList from '../Components/UI/ProductList'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../Components/UI/Clock'

export default function Home() {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestsalesProducts, setBestsalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear()

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'chair'
    )
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'sofa'
    )
    const filteredMobileProducts = products.filter(
      (item) => item.category === 'mobile'
    )
    const filteredWirelessProducts = products.filter(
      (item) => item.category === 'wireless'
    )
    const filteredPopualrProducts = products.filter(
      (item) => item.category === 'watch'
    )

    setTrendingProducts(filteredTrendingProducts)
    setBestsalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopualrProducts)
  }, []);

  return (
    <Helmet title={'Home'}>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero_content">
                <p className="hero_subtitle">Trending Product in {year}</p>
                <h2>Make your Interior More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas dolor vero delectus. Nam inventore reprehenderit hic maxime! Quos, dignissimos!</p>

                <motion.button whileTap={{ scale: 1.2 }} className='buy_btn'>
                  <Link to='/shop'>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Service />

      <section className='trending_products'>
        <Container>
          <Row>
            <Col lg='12' className=' text-center'>
              <h2 className='section_title'>Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className='best_sales'>
        <Container>
          <Row>
            <Col lg='12' className=' text-center'>
              <h2 className='section_title'>Best Sales</h2>
            </Col>

            <ProductList data={bestsalesProducts} />
          </Row>
        </Container>
      </section>

      <section className='time_count'>
        <Container>
          <Row>
            <Col lg='6' md='12' className='count_down-col'>
              <div className="clock_top-content">
                <h4 className=' text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className=' text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock />

              <motion.button whileTap={{ scale: 1.2 }} className="buy_btn store_btn">
                <Link to='/shop'>Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg='6' md='12' className=' text-end counter_img'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='new_arrivals'>
        <Container>
          <Row>
            <Col lg='12' className=' text-center mb-5'>
              <h2 className='section_title'>New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className='popular_category'>
        <Container>
          <Row>
            <Col lg='12' className=' text-center mb-5'>
              <h2 className='section_title'>Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
