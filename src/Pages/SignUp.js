import React, { useState } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../Style/login.css'


export default function SignUp() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [, setFile] = useState(null)


  return (
    <Helmet title='SignUp'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className=' m-auto text-center'>
              <h3 className=' fw-bold mb-4'>SignUp</h3>

              <Form className='auth_form' >
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Username' name='username' id='username' value={username}
                    onChange={e => setUsername(e.target.value)} />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type="email" placeholder='Enter your email' name='email' id='email' value={email}
                    onChange={e => setEmail(e.target.value)} />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type="password" placeholder='Enter your password' name='password' id='password' value={password}
                    onChange={e => setPassword(e.target.value)} />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type="file"
                    onChange={e => setFile(e.target.files[0])} />
                </FormGroup>

                <button type='submit' className="buy_btn auth_btn">Create an Account</button>
                <p>Already have an account? <Link to='/login'> Login</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
