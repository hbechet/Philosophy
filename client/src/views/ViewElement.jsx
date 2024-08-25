import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HandleFetch from '../components/HandleFetch';
import Spinner from 'react-bootstrap/Spinner';

const ViewElement = () => {
  const { id, collection } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      var res = HandleFetch(id, collection);
      res.then((info) => {
        setData(info.data);
      })
        .catch((error) => {
          console.error(`Could not get data: ${error}`);
        })
    }, 2500);
  }, [collection, id]);

  if (!data) {
    return (
      <div className="container content">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h1>Searching for element...</h1>
      </div>)
  }

  const returnedData = (collection === 'philos') ? (
    <div className="container content">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={data.photo} className="img-fluid rounded" alt="Element" />
        </div>
        <div className="col-md-8">
          <div className="card-body ms-5">
            <h1>{data.name}</h1>
            <br></br>
            <p><b>Nationality:</b> {data.nationality}</p>
            <p><b>Born date:</b> {new Date(data.born_date).toLocaleDateString()}</p>
            <p><b>Death date:</b> {new Date(data.death_date).toLocaleDateString()}</p>
            <br></br>
            <h4>Main quotes / ideas</h4>
            <ul>
              {data.ideas.map((idea) => {
                return <li>{idea}</li>
              })}
            </ul>
            <br></br>
            <h4>Schools of Thought</h4>
            <ul>
              {data.schools.map((school) => {
                return <li>{school}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container content">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <br></br>
      <h4>Renowned philosophers:</h4>
      <ul>
        {data.philosophers.map((philo) => {
          return <li>{philo}</li>
        })}
      </ul>
    </div>
  );

  return returnedData;

};

export default ViewElement;
