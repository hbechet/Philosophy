import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HandleFetch from '../hooks/HandleFetch';

const ViewPhilo = () => {
  const { id } = useParams();


  const [philoData, setPhiloData] = useState({});

  const res = HandleFetch(id);

  useEffect(() => {
    setTimeout(() => {
      res.then((data) => {
        setPhiloData(data);
      })
        .catch((error) => {
          console.error(`Could not get data: ${error}`);
        })
    }, 2500);
  }, []);

  return (

    <div className="container" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={philoData.photo} className="img-fluid rounded-start" alt="Element" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            {philoData.ideas}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPhilo;
