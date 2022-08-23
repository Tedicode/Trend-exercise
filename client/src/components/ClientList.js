import "../App.css";
import SingleClient from "./SingleClient";

const ClientList = ({ clientList }) => {
  return (
    <table className="client-list">
      <tbody>
        <tr className="single-client-row">
          <th>
            <input type="checkbox"></input> Name
          </th>
          <th>Last Transaction</th>
          <th>Net Promoter Score</th>
          <th>Contact</th>
        </tr>
        {clientList.map((client) => {
          return <SingleClient key={client.name} client={client} />;
        })}
      </tbody>
    </table>
  );
};

export default ClientList;
