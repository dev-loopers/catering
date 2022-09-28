import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { Link ,useNavigate} from "react-router-dom";
import axios from 'axios';
import dishListContext from "../dishContext";
    function LoginComp() {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    console.log("logins stauts : " + isLoggedIn);
    const history = useNavigate();

    if (isLoggedIn){
        history("/account");
    }
    const [values,setValues] = useState({
        email:'',
        password:''
    });

    const fieldHandler = (e)=>{
        setValues({...values,[e.target.name]:e.target.value});
    }

    const sendReq = async ()=>{
        const req = await axios.post('/api/auth/login',{
            email:values.email,
            password:values.password
        });

        const data = await req.data;
        if(data.is_done && isLoggedIn === false){
            setIsLoggedIn(true);
            console.log("logins stauts : " + isLoggedIn);
            console.log("if is working ");


        }else{
            console.log("else is working ");

            setIsLoggedIn(false);
        }
        return data;

    }
  
    const handleSubmit =(e) =>{
        e.preventDefault();
        sendReq().then(()=> history("/account"));       

    }
    return (
        <Container className='d-flex align-items-center justify-content-center p-5'>
            <Card className='shadow border-0'>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={fieldHandler} />

                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Password" name="password" onChange={fieldHandler}/>
                        </Form.Group>
                        <div className='d-grid'>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </div>
                        <Link to="/register" className='d-block text-center mt-3'>Forgot password.</Link>

                    </Form>
                

                </Card.Body>
            </Card>

        </Container>
    );
}

export default LoginComp;