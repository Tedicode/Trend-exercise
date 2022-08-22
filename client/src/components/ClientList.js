import "../App.css";
import SingleClient from "./SingleClient";

const ClientList = ({ clientList }) => {
  return (
    <table className="client-list">
      <th className="single-client-row">
        <td>
          <input type="checkbox"></input> Name
        </td>
        <td>Last Transaction</td>
        <td>Net Promoter Score</td>
        <td>Contact</td>
      </th>
      {clientList.map((client) => {
        return <SingleClient client={client} />;
      })}
    </table>
  );
};

export default ClientList;
