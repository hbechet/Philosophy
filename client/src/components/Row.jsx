import React from 'react';
import { Action } from './Action';


const Row = ({ data }) => {

  return (
    <tr>
      {data.map((item, index) => (
        index === 1 ? <td key={index}><img alt="Element" src={item} height={60} width={100} /></td> : <td key={index}>{item}</td>
      ))}
      <td><Action text="View" path={'/viewelement/' + data[0]} delay={0} /></td>
      <td><Action text="Modify" path={'/updateelement/' + data[0]} delay={1000} /></td>
    </tr>
  );
};

export default Row;
