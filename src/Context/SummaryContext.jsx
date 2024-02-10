import { createContext, useState } from "react";

export const SummaryContext = createContext();
function SummaryData({ children }) {
  const [data, setData] = useState([
    {
      id: 1,
      username: "@nathanf",
      socialMedia: "facebook",
      total: 1987,
      today: 12,
      type: "growth",
    },
    {
      id: 2,
      username: "@nathanf",
      socialMedia: "twitter",
      total: 1044,
      today: 99,
      type: "growth",
    },
    {
      id: 3,
      username: "@realnathanf",
      socialMedia: "instagram",
      total: "11k",
      today: 1099,
      type: "growth",
    },
    {
      id: 4,
      username: "Nathan F.",
      socialMedia: "youtube",
      total: 8239,
      today: 144,
      type: "decline",
    },
  ]);

  return (
    <SummaryContext.Provider value={data}>
      {children}
    </SummaryContext.Provider>
  );
}

export default SummaryData;
