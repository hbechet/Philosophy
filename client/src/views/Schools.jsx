import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Action } from '../components/Action';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import DeleteElement from '../components/DeleteElement';

const Philosophers = () => {
  const [schools, setSchools] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/schools/all')
      .then((res) => res.json())
      .then((res) => setSchools(res.data))
      .catch(err => {
        setError(err);
        console.log(error);
      });
  }, [error]);

  const handleDelete = (ev) => {
    const id = ev.target.id;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteElement(id, "schools");
        Swal.fire({
          title: "Deleted!",
          text: "The element has been deleted.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload(false);
          }
        })
      }
    });
  }

  return (
    <div className="container content">
      <Action className="content" text="CREATE NEW ENTRY" path={'/new/schools'} delay={0} type="success" />
      <div className="philos content">
        {schools.map((school, index) => {
          return (
            <Card key={index} style={{ width: '20rem' }}>
              <Card.Body>
                <Card.Title>{school.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{school.description.substring(0, 150) + "..."}</Card.Subtitle>
                <Card.Text>
                  <br></br>
                  <span>Most famous Philosopher: </span>
                  <br></br>
                  <i>{school.philosophers[0]}</i>
                </Card.Text>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Actions</Accordion.Header>
                    <Accordion.Body>
                      <div className='action-buttons'>
                        <Action text="View details" path={'/view/schools/' + school._id} delay={0} type="primary" />
                        <Action text="Modify" path={'/update/schools/' + school._id} delay={0} type="secondary" />
                        <Button className="btn btn-danger" id={school._id} onClick={handleDelete} >Delete</Button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </div>
  );
};

export default Philosophers;
