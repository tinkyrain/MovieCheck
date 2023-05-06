import { useSelector } from "react-redux";
import SearchBlock from "./components/SearchBlock";
import InfoBlock from "./components/InfoBlock";
import Error from "./components/Error";


function App() {
  const vision = useSelector(state => state.searchVision);
  const error = useSelector(state => state.error);
  const errorText = useSelector(state => state.textError);

  return (
    <main>
      {
        error ? <Error errorText={errorText}/> : 
        vision ? <SearchBlock/> : <InfoBlock/>
      }
    </main>
  );
}

export default App;
