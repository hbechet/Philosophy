import React, { useEffect, useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Action } from '../components/Action';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import deleteElement from '../utils/deleteElement';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Philosophers = () => {
  const [philos, setPhilos] = useState([]);
  const [error, setError] = useState(null);

  const { token } = useContext(AuthContext);

  useEffect(() => {
    fetch('https://philo-server.onrender.com/api/philos/all')
      .then((res) => res.json())
      .then((res) => setPhilos(res.data))
      .catch(err => {
        setError(err);
        console.log(error);
      });
  }, [error]);

  const navigate = useNavigate();

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
        deleteElement(id, "philos");
        Swal.fire({
          title: "Deleted!",
          text: "The element has been deleted.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/profile');
          }
        })
      }
    });
  }

  if (token) {
    return (
      <div className="container content">
        <Action className="content" text="CREATE NEW ENTRY" path={'/new/philo'} delay={0} type="success" />
        <div className="philos content">
          {philos.map((philo, key) => {
            return (
              <Card key={key} style={{ width: '20rem' }}>
                <Card.Img variant="top" src={philo.photo} />
                <Card.Body>
                  <Card.Title>{philo.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{philo.schools[0]}</Card.Subtitle>
                  <Card.Text style={{ fontStyle: 'italic' }}>
                    {`"${philo.ideas[0]}"`}
                  </Card.Text>
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Actions</Accordion.Header>
                      <Accordion.Body>
                        <div className='action-buttons'>
                          <Action text="View details" path={'/view/philos/' + philo._id} delay={0} type="primary" />
                          <Action text="Modify" path={'/update/philos/' + philo._id} delay={0} type="secondary" />
                          <Button className="btn btn-danger" id={philo._id} onClick={handleDelete} >Delete</Button>
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
  }

  return (
    <div className="container content">
      <div className="philos content">
        {philos.map((philo, key) => {
          return (
            <Card key={key} style={{ width: '20rem' }}>
              <Card.Img variant="top" src={philo.photo} />
              <Card.Body>
                <Card.Title>{philo.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{philo.schools[0]}</Card.Subtitle>
                <Card.Text style={{ fontStyle: 'italic' }}>
                  {`"${philo.ideas[0]}"`}
                </Card.Text>
                <div className='action-buttons'>
                  <Action text="View details" path={'/view/philos/' + philo._id} delay={0} type="primary" />
                </div>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </div>
  );


};

export default Philosophers;
