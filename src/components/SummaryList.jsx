import { useContext } from "react";
import { SummaryContext } from "../Context/SummaryContext";
import SummaryCard from "./SummaryCard";
function SummaryList() {
  const data = useContext(SummaryContext);
  return (
    <div className="container items-center z-10 relative grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 mt-10">
      {data.map((props) => (
        <SummaryCard {...props} key={props.id} />
      ))}
    </div>
  );
}

export default SummaryList;
