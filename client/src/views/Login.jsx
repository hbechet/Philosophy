import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2'

const Login = () => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({});

    const handleLogin = async (ev) => {
        ev.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                body: JSON.stringify(loginData),
                headers: {
                    "Content-Type": "application/json",
                }
            })

            if (!res.ok) {
                throw new Error('Login failed');
            }

            const data = await res.json();
            console.log(data);

            if (!data.success) {
                throw new Error(data.data);
            }

            localStorage.setItem('token', data.token);

            Swal.fire({
                title: "Logged successfully!",
                text: "Do you want to check your profile?",
                icon: "success",
                showDenyButton: true,
                confirmButtonColor: "#3085d6",
                denyButtonColor: "#d33",
                confirmButtonText: "Yes, please."
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/profile');
                } else if (result.isDenied) {
                    navigate('/');
                }
            });

        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: err.hasOwnProperty("message") ? err.message : err
            });
            console.log('There was an error', err);
        }
    };

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setLoginData({ ...loginData, [key]: value })
    }

    return (
        <div className="container content login">
            <h1 className="mb-5">Login Page</h1>
            <Form method="get" onSubmit={handleLogin} onChange={handleChange}>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control id="email" type="text" value={loginData.email || ''} required />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control id="password" type="password" value={loginData.password || ''} required />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;