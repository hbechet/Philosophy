// Table.jsx
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Action } from '../components/Action';

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
    <div className="container philos content">
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
              <div className='action-buttons'>
                <Action text="View details" path={'/view/philos/' + philo._id} delay={0} type="primary" collection="philos" />
                <Action text="Modify" path={'/updateelement/philos/' + philo._id} delay={0} type="secondary" collection="philos" />
              </div>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  );
};

export default Philosophers;
