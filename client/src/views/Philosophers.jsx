// Table.jsx
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Action } from '../components/Action';
import Accordion from 'react-bootstrap/Accordion';

const Philosophers = () => {
  const [philos, setPhilos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/philos/all')
      .then((res) => res.json())
      .then((res) => setPhilos(res.data))
      .catch(err => {
        setError(err);
        console.log(error);
      });
  }, [error]);

  return (
    <div className="container content">
      <Action className="content" text="CREATE NEW ENTRY" path={'/new/philos'} delay={0} type="success" />
      <div className="philos content">
        {philos.map((philo) => {
          return (
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={philo.photo} />
              <Card.Body>
                <Card.Title>{philo.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{philo.schools[0]}</Card.Subtitle>
                <Card.Text>
                  {philo.ideas[0]}
                </Card.Text>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Actions</Accordion.Header>
                    <Accordion.Body>
                      <div className='action-buttons'>
                        <Action text="View details" path={'/view/philos/' + philo._id} delay={0} type="primary" />
                        <Action text="Modify" path={'/update/philos/' + philo._id} delay={0} type="secondary" />
                        <Action text="Delete" path={'/delete/philos/' + philo._id} delay={0} type="danger" />
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
