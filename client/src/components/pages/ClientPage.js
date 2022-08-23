import "../../App.css";
import ClientList from "../ClientList";
import StatsBar from "../StatsBar";

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
      <StatsBar stats={dummyStats} />

      <div className="all-clients">
        <div className="all-clients-options-header">
          <h2 className="all-clients-title">All Clients</h2>
          <div className="filter-options">
            Filter Options - toggle visibility
          </div>
          <button>Filter</button>
          <div>search bar</div>
        </div>
        <ClientList clientList={dummyClientList} />
      </div>
    </div>
  );
};

export default ClientPage;
