import "../App.css";

const SingleStat = ({ stat }) => {
  return (
    <div className="single-stat" key={stat.statName}>
      <p>{stat.statName}</p>
      <p>{stat.value}</p>
    </div>
  );
};

export default SingleStat;
