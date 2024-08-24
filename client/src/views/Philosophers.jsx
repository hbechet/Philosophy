// Table.jsx
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Philosophers = () => {
  const [philos, setPhilos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/philos/all')
      .then((res) => res.json())
      .then((res) => setPhilos(res.data));
  }, []);

  return (
    <div className="container philos">
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
              <Button variant="primary">View Detail</Button>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  );
};

export default Philosophers;
