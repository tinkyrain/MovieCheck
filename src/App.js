import { useSelector } from "react-redux";
import SearchBlock from "./components/SearchBlock";


function App() {
  const vision = useSelector(state => state.searchVision);

  return (
    <main>
      {
        vision ? <SearchBlock/> : <p>No vision</p>
      }
    </main>
  );
}

export default App;
