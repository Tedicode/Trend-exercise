import "../App.css";

const SingleClient = ({ client }) => {
  return (
    <tr className="single-client">
      <td>{client.name}</td>
      <td>{client.lastTransaction}</td>
      <td>{client.netPromoterScore}</td>
      <td>{client.contact}</td>
    </tr>
  );
};

export default SingleClient;
