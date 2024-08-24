// Table.jsx
import Row from '../components/Row';

const Schools = ({ rows }) => {

  const filteredRows = rows
    .filter((row) => row.id && row.image && row.name && row.email && row.phone) // Asegúrate de que la fila tenga las propiedades necesarias
    .filter((row) =>
      Object.values(row).some((cell) => cell.toLowerCase())
    );

  return (
    <div className="container">
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Imagen</th>
            <th>Name</th>
            <th>Email</th>
            <th>Telephone</th>
            <th></th>
            <th>Actions</th>
            <th></th>
          </tr>
          {filteredRows.map((rowData, index) => (
            <Row key={index} data={Object.values(rowData)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schools;
