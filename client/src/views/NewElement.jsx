import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2'

const NewElement = () => {
  const { collection } = useParams();
  const navigate = useNavigate();

  const [newElement, setElementData] = useState({});
  const [error, setError] = useState('');

  const createElement = (ev) => {
    ev.preventDefault();
    fetch(`http://localhost:5000/api/${collection}/new`, {
      method: "POST",
      body: JSON.stringify(newElement),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => res.json())
      .then((info) => {
        var id = info.data._id;

        Swal.fire({
          title: "Element created successfully!",
          text: "Do you want to double check it?",
          icon: "success",
          showDenyButton: true,
          confirmButtonColor: "#3085d6",
          denyButtonColor: "#d33",
          confirmButtonText: "Yes, please."
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(collection === 'philos' ? `/view/philos/${id}` : `/view/schools/${id}`);
          } else if (result.isDenied) {
            navigate(collection === 'philos' ? '/philosophers' : '/schools');
          }
        });

      })

      .catch(err => {
        setError(err);
        console.log('There was an error', err);
      })
  };

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setElementData({ ...newElement, [key]: value })
  }

  const specificForm = (collection === 'philos') ? (
    <div className="content">
      <h1 className="mb-5">Create a new Philosopher</h1>
      <Form method="get" onSubmit={createElement} onChange={handleChange}>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={newElement.name} required />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="nationality">
            <Form.Label>Nationality</Form.Label>
            <Form.Control type="text" value={newElement.nationality} required />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="born_date">
            <Form.Label>Birth date</Form.Label>
            <Form.Control type="text" placeholder="Format: 'YYYY-mm-dd'" value={newElement.born_date} required />
            <Form.Text className="text-muted">
              For BC dates: "450 BC"
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="death_date">
            <Form.Label>Death date</Form.Label>
            <Form.Control type="text" value={newElement.death_date} />
            <Form.Text className="text-muted">
              Same Format as Birth date
            </Form.Text>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="photo">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="file" value={newElement.photo} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create new
        </Button>
      </Form>
    </div>
  ) : (
    <div className="content">
      <h1 className="mb-5">Create a new School of Thought</h1>
      <Form method="get" onSubmit={createElement} onChange={handleChange}>
        <Form.Group as={Col} className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={newElement.name} required />
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create new
        </Button>
      </Form>
    </div>
  );

  return (
    <div className="container">
      {specificForm}
      <h2 className="mt-5">{error}</h2>
    </div>
  )
};

export default NewElement;
