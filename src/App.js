import { useSelector } from "react-redux";
import SearchBlock from "./components/SearchBlock";
import InfoBlock from "./components/InfoBlock";
import Loading from "./components/Loading";


function App() {
  const vision = useSelector(state => state.searchVision);

  return (
    <main>
      {
        vision ? <SearchBlock/> : <InfoBlock/>
      }
    </main>
  );
}

export default App;
