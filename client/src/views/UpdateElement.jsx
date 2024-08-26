import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2'
import handleFetch from '../utils/handleFetch';

const UpdateElement = () => {
  const { id, collection } = useParams();
  const navigate = useNavigate();

  const [updatedElement, setElementData] = useState({});

  useEffect(() => {
    const data = handleFetch(id, collection);
    data.then((info) => {
      setElementData(info.data);
      delete updatedElement._v; // deleting version for error control
    })
      .catch((error) => {
        console.error(`Could not get data: ${error}`);
      })
  }, [id, collection, updatedElement._v]);

  const updateElement = (ev) => {
    ev.preventDefault();
    fetch(`https://philo-server.onrender.com/api/${collection}/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedElement),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json())
      .then((info) => {
        if (!info.success) {
          throw new Error(info.data);
        }
        var updatedID = info.data._id;

        Swal.fire({
          title: "Element updated successfully!",
          text: "Do you want to see the result?",
          icon: "success",
          showDenyButton: true,
          confirmButtonColor: "#3085d6",
          denyButtonColor: "#d33",
          confirmButtonText: "Yes, please."
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(collection === 'philos' ? `/view/philos/${updatedID}` : `/view/schools/${updatedID}`);
          } else if (result.isDenied) {
            navigate(collection === 'philos' ? '/philosophers' : '/schools');
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
    setElementData({ ...updatedElement, [key]: value })
  }

  const specificForm = (collection === 'philos') ? (
    <div className="content">
      <h1 className="mb-5">Updating Philosopher: {updatedElement.name}</h1>
      <Form method="get" onSubmit={updateElement} onChange={handleChange}>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control id="name" type="text" value={updatedElement.name} required />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" >
            <Form.Label>Nationality</Form.Label>
            <Form.Control id="nationality" type="text" value={updatedElement.nationality} required />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Update element
        </Button>
      </Form>
    </div>
  ) : (
    <div className="content">
      <h1 className="mb-5">Updating School: {updatedElement.name}</h1>
      <Form method="get" onSubmit={updateElement} onChange={handleChange}>
        <Form.Group as={Col} className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control id="name" type="text" value={updatedElement.name} required />
        </Form.Group>
        <Form.Group as={Col} className="mb-3" >
          <Form.Label>Description</Form.Label>
          <Form.Control id="description" as="textarea" rows={3} value={updatedElement.description} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update element
        </Button>
      </Form>
    </div>
  );

  return (
    <div className="container">
      {specificForm}
    </div>
  )
};

export default UpdateElement;
