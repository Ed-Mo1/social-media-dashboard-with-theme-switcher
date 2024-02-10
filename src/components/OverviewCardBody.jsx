import iconUp from "../../images/icon-up.svg";
import iconDown from "../../images/icon-down.svg";

function OverviewCardBody({total,today,type}) {
  return (
    <div className="flex justify-between items-end pt-5">
    <h3 className="font-700 text-3xl dark:text-white">{total}</h3>
    <div className="flex items-center gap-1 font-700">
      <img src={type === "growth" ? iconUp : iconDown} alt="icon" />
      <span
        className={`${
          type === "growth" ? "text-limeGreen" : "text-brightRed"
        }`}
      >
        {today}
      </span>
    </div>
  </div>
  )
}

export default OverviewCardBody