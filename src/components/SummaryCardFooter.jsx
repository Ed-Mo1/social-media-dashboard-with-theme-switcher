import iconUp from "../../images/icon-up.svg";
import iconDown from "../../images/icon-down.svg";
function SummaryCardFooter({type,today}) {
  return (
    <div className="flex gap-1 items-center justify-center">
    <img src={type === "growth" ? iconUp : iconDown} alt="icon" />
    <h5
      className={` font-700 ${
        type === "growth" ? "text-limeGreen" : "text-brightRed"
      }`}
    >
      {today} Today
    </h5>
  </div>
  )
}

export default SummaryCardFooter