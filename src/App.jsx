import Header from "./components/Header";
import SummaryData from "./Context/SummaryContext";
import TotalList from "./components/SummaryList";
import OverviewData from "./Context/OverviewContext";
import OverviewList from "./components/OverviewList";
function App() {
  return (
    <>
      <div className="upper-content-handler">
        <Header />
        <SummaryData>
          <TotalList />
        </SummaryData>
      </div>
      <OverviewData>
        <OverviewList />
      </OverviewData>
    </>
  );
}

export default App;
