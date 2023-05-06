import { useSelector } from "react-redux";
import SearchBlock from "./components/SearchBlock";
import InfoBlock from "./components/InfoBlock";
import Error from "./components/Error";


function App() {
  const vision = useSelector(state => state.searchVision);

  return (
    <main>
      {
        //vision ? <SearchBlock/> : <InfoBlock/>
      }
      <Error/>
    </main>
  );
}

export default App;
