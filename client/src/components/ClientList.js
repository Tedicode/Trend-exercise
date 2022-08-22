import "../App.css";
import SingleClient from "./SingleClient";

const ClientList = ({ clientList }) => {
  return (
    <table>
      <th>
        <td>Name</td>
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
