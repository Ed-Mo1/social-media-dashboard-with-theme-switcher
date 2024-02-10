function SummaryCardHeader({icon,username}) {
  return (
    <div className="flex gap-2 items-center justify-center">
    <img src={icon} alt="icon" className="w-[30px]" />
    <h5 className="text-light-darkGrayishBlue font-700 dark:text-dark-desaturatedBlue">
      {username}
    </h5>
  </div>
  )
}

export default SummaryCardHeader