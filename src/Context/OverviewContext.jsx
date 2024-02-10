import React, { createContext, useState } from "react";

export const OverviewContext = createContext();
function OverviewData({ children }) {
  const [data, setData] = useState([
    {
      id: 1,
      desc: "page views",
      socialMedia: "facebook",
      total: 87,
      today: "3%",
      type: "growth",
    },
    {
      id: 2,
      desc: "likes",
      socialMedia: "facebook",
      total: 52,
      today: "2%",
      type: "decline",
    },
    {
      id: 3,
      desc: "likes",
      socialMedia: "instagram",
      total: 5462,
      today: "2257%",
      type: "growth",
    },
    {
      id: 4,
      desc: "profile views",
      socialMedia: "instagram",
      total: "52k",
      today: "1375%",
      type: "growth",
    },
    {
      id: 5,
      desc: "retweets",
      socialMedia: "twitter",
      total: "117",
      today: "303%",
      type: "growth",
    },
    {
      id: 6,
      desc: "likes",
      socialMedia: "twitter",
      total: "507",
      today: "553%",
      type: "growth",
    },
    {
      id: 7,
      desc: "likes",
      socialMedia: "youtube",
      total: "107",
      today: "19%",
      type: "decline",
    },
    {
      id: 8,
      desc: "total views",
      socialMedia: "youtube",
      total: "1407",
      today: "12%",
      type: "decline",
    },
  ]);
  return (
    <OverviewContext.Provider value={data}>
      {children}
    </OverviewContext.Provider>
  );
}

export default OverviewData;
