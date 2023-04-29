import { useSelector } from "react-redux";
import SearchBlock from "./components/SearchBlock";
import InfoBlock from "./components/InfoBlock";


function App() {
  const vision = useSelector(state => state.searchVision);

  return (
    <main>
      {
        //vision ? <SearchBlock/> : <InfoBlock/>
      }
      <InfoBlock/>
    </main>
  );
}

export default App;
