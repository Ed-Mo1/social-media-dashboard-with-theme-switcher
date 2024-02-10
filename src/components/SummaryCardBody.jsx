function SummaryCardBody({total,socialMedia}) {
  return (
    <div className="text-center">
    <h2 className=" text-light-veryDarkBlue font-700 text-5xl xl:text-7xl dark:text-white">
      {total}
    </h2>
    <h5 className="text-light-darkGrayishBlue tracking-[5px] mt-2 dark:text-dark-desaturatedBlue">
      {socialMedia === "youtube" ? "Subscribers" : "Followers"}
    </h5>
  </div>
  )
}

export default SummaryCardBody