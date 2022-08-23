import "../App.css";
import SingleStat from "./SingleStat";

const StatsBar = ({ stats }) => {
  return (
    <div className="stats-bar">
      {stats.map((stat) => {
        return <SingleStat key={stat.statName} stat={stat} />;
      })}
    </div>
  );
};

export default StatsBar;
