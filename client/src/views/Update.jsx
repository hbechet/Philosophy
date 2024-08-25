import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Action } from '../components/Action';
import { useElements } from '../hooks/useElements';

const Update = () => {
  const { id } = useParams();
  const { data: elements, updateElement } = useElements();
  const navigate = useNavigate();

  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    const foundElement = elements.find(element => element.id === id);
    setRowData(foundElement);
  }, [id, elements]);

  const handleUpdate = () => {
    const updatedData = {
      name: document.getElementsByName('name')[0].value,
      quantity: document.getElementsByName('quantity')[0]?.value,
      email: document.getElementsByName('email')[0]?.value,
      phone: document.getElementsByName('phone')[0]?.value,
    };

    // Actualizar el elemento utilizando el hook
    updateElement(id, updatedData);

    // Redirigir a la página correspondiente
    navigate(id < 100 ? '/inventory' : '/providers');
  };

  if (!rowData) {
    return <h1>Searching for element...</h1>;
  }

  const commonDetails = (
    <div>
      <h3>Details of {id < 100 ? 'Elemento' : 'Proveedor'}</h3>
      <p>ID: {rowData.id}</p>
    </div>
  );

  const specificDetails = id < 100 ? (
    <div>
      {commonDetails}
      <form>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" defaultValue={rowData.name} />
        <br />
        <label htmlFor="quantity">Stock</label>
        <br />
        <input type="number" name="quantity" defaultValue={rowData.quantity} />
        <br />
        <label htmlFor="provider">Quantity</label>
        <br />
        <input type="text" name="provider" defaultValue={rowData.provider} />
        <br />
        <br />
        <Action text="Modificar" onClick={handleUpdate} path="/modifiedelement" delay={1000} />
        <br />
        <br />
        <Action text="Eliminar" path="/modifiedelement" delay={1000} />
      </form>
    </div>
  ) : (
    <div>
      {commonDetails}
      <form>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" defaultValue={rowData.name} />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" name="email" defaultValue={rowData.email} />
        <br />
        <label htmlFor="phone">Telephone</label>
        <br />
        <input type="text" name="phone" defaultValue={rowData.phone} />
        <br />
        <br />
        <Action text="Modificar" onClick={handleUpdate} path="/modifiedelement" delay={1000} />
        <br />
        <br />
        <Action text="Eliminar" path="/modifiedelement" delay={1000} />
      </form>
    </div>
  );

  return (
    <div className="card mb-3 card container" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={"../" + rowData.image} className="img-fluid rounded-start" alt="Elemeto" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            {specificDetails}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
