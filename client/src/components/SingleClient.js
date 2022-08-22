import "../App.css";

const SingleClient = ({ client }) => {
  return (
    <tr className="single-client-row">
      <td>
        <input type="checkbox"></input> {client.name}
      </td>

      <td>{client.lastTransaction}</td>
      <td>{client.netPromoterScore}</td>
      <td>{client.contact}</td>
    </tr>
  );
};

export default SingleClient;
