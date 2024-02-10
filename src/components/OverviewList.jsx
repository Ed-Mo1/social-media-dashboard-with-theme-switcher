import React from "react";
import { OverviewContext } from "../Context/OverviewContext";
import OverviewCard from "./OverviewCard";
function OverviewList() {
  const data = React.useContext(OverviewContext);
  return (
    <div className="container py-5">
      <h2 className="text-2xl md:text-4xl font-700 text-light-darkGrayishBlue dark:text-white">
        Overview - Today
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {data.map((props) => {
          return <OverviewCard key={props.id} {...props} />;
        })}
      </div>
    </div>
  );
}

export default OverviewList;
