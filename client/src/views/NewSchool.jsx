import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2'

const NewSchool = () => {

    const navigate = useNavigate();

    const [newSchool, setSchoolData] = useState('');

    const createElement = (ev) => {
        ev.preventDefault();

        fetch(`https://philo-server.onrender.com/api/schools/new`, {
            method: "POST",
            body: JSON.stringify(newSchool),
            headers: { "Content-Type": "application/json" },
        })
            .then(response => response.json())
            .then((info) => {
                if (!info.success) {
                    throw new Error(info.data);
                }
                var id = info.data._id;

                Swal.fire({
                    title: "Element created successfully!",
                    text: "Do you want to see the result?",
                    icon: "success",
                    showDenyButton: true,
                    confirmButtonColor: "#3085d6",
                    denyButtonColor: "#d33",
                    confirmButtonText: "Yes, please."
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(`/view/schools/${id}`);
                    } else if (result.isDenied) {
                        navigate('/schools');
                    }
                });
            })

            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: err.hasOwnProperty("message") ? err.message : err
                });
                console.log('There was an error', err);
            })
    };

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setSchoolData({ ...newSchool, [key]: value })
    }

    return (
        <div className="container">
            <div className="content">
                <h1 className="mb-5">Create a new School of Thought</h1>
                <Form method="get" onSubmit={createElement} onChange={handleChange}>
                    <Form.Group as={Col} className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={newSchool.name} required />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={newSchool.description} required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create new
                    </Button>
                </Form>
            </div>
        </div>
    );

};

export default NewSchool;