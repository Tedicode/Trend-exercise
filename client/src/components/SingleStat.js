import "../App.css";

const SingleStat = ({ stat }) => {
  return (
    <div className="single-stat" key={stat.statName}>
      <h4>{stat.statName}</h4>
      <p>{stat.value}</p>
    </div>
  );
};

export default SingleStat;
