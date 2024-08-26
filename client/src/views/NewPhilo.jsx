import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2'

const NewPhilo = () => {
  const navigate = useNavigate();

  const [namePhilo, setName] = useState('');
  const [nationPhilo, setNation] = useState('');
  const [bornPhilo, setBorn] = useState('');
  const [deathPhilo, setDeath] = useState('');
  const [photoPhilo, setPhoto] = useState('');

  const createElement = (ev) => {
    ev.preventDefault();

    const formData = new FormData();
    formData.append('photo', photoPhilo);
    formData.append('name', namePhilo);
    formData.append('nationality', nationPhilo);
    formData.append('born_date', bornPhilo);
    formData.append('death_date', deathPhilo);


    fetch(`https://philo-server.onrender.com/api/philos/new`, {
      method: "POST",
      body: formData,
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
            navigate(`/view/philos/${id}`);
          } else if (result.isDenied) {
            navigate('/philosophers');
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

  const onFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="mb-5">Create a new Philosopher</h1>
        <Form method="get" onSubmit={createElement} >
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={namePhilo || ''} onChange={(e) => { setName(e.target.value) }} required />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="nationality">
              <Form.Label>Nationality</Form.Label>
              <Form.Control type="text" value={nationPhilo || ''} required onChange={(e) => { setNation(e.target.value) }} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="born_date">
              <Form.Label>Birth date</Form.Label>
              <Form.Control type="text" placeholder="Format: 'YYYY-mm-dd'" value={bornPhilo || ''} onChange={(e) => { setBorn(e.target.value) }} required />
              <Form.Text className="text-muted">
                For BC dates: "450 BC"
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="death_date">
              <Form.Label>Death date</Form.Label>
              <Form.Control type="text" value={deathPhilo || ''} onChange={(e) => { setDeath(e.target.value) }} />
              <Form.Text className="text-muted">
                Same Format as Birth date
              </Form.Text>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="photo">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="file" onChange={onFileChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create new
          </Button>
        </Form>
      </div>
    </div>
  )
};

export default NewPhilo;
