import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
function RegisterComp() {
    const history = useNavigate();
    const [values,setValues] = useState({
        username:'',
        password:''
    });

    const fieldHandler = (e)=>{
        setValues({...values,[e.target.name]:e.target.value});
    }

    const sendRequest = async ()=>{
        const req = await axios.post('/api/auth/register',{
            values
        })
        return req.data;
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        sendRequest().then(()=>history("/login"));

    }
    return (
        <Container className='p-5'>
            <Card >
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" name="fname" onChange={fieldHandler} />

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder="Enter lastname" name="lname" onChange={fieldHandler} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" name="username" onChange={fieldHandler} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" name="username" onChange={fieldHandler} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" name="username" onChange={fieldHandler} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" name="username" onChange={fieldHandler} />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="username" onChange={fieldHandler}/>
                        </Form.Group>
                        <div className='d-grid'>
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </div>
                        <Link to="/register" className='d-block text-center mt-3'>Already registerd Login.</Link>

                    </Form>
                

                </Card.Body>
            </Card>

        </Container>
    );
}

export default RegisterComp;