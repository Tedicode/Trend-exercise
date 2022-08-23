import "../../App.css";
import ClientList from "../ClientList";

let dummyStats = [
  {
    statName: "Total Clients",
    value: 108,
  },
  {
    statName: "Net Promoter Score",
    value: "+43",
  },
  {
    statName: "Client Retention",
    value: "95%",
  },
];

let dummyClientList = [
  {
    name: "Jill McCasky",
    lastTransaction: "February 1, 2022",
    netPromoterScore: 9,
    contact: "(610)-345-3456",
  },
  {
    name: "Margaret Jones",
    lastTransaction: "April 8, 2022",
    netPromoterScore: 4,
    contact: "(610)-225-9986",
  },
  {
    name: "John Smith",
    lastTransaction: "February 1, 2022",
    netPromoterScore: 2,
    contact: "(610)-312-3779",
  },
];

const ClientPage = () => {
  return (
    <div className="client-page">
      <div className="stats-bar">
        {dummyStats.map((stat) => {
          return (
            <div key={stat.statName}>
              {" "}
              <h4>{stat.statName}</h4>
              <h3>{stat.value}</h3>
            </div>
          );
        })}
      </div>
      <div className="all-clients">
        <ClientList clientList={dummyClientList} />
      </div>
    </div>
  );
};

export default ClientPage;
