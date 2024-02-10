
function OverviewCardHeader({desc,icon}) {
  return (
    <div className="flex justify-between items-center">
    <h5 className="text-light-darkGrayishBlue capitalize dark:text-dark-desaturatedBlue font-700">
      {desc}
    </h5>
    <img src={icon} alt="icon" className="w-[30px]" />
  </div>
  )
}

export default OverviewCardHeader