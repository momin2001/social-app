import React from 'react'
import style from '../style/signup.module.css'
import Form from 'react-bootstrap/Form'
import Bounce from 'react-reveal/Bounce';
import { Button } from 'react-bootstrap'

const Signup = () => {
    return (
        <>
           <Bounce bottom>
            <section className={style.signup}>
                <div>
                <Form>
                    <h3 className="text-center">Signup</h3>
                    <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="name" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 formInput" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 formInput" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-enter Password" />
                    </Form.Group>
                    <p>Already have an account? <a href="#">Sign in</a></p>
                    <Button variant="success" type="submit" className={style.submitBtn}>
                        Submit
                    </Button>
                </Form>
                </div>
            </section>
        </Bounce>
        </>
    )
}

export default Signup