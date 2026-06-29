import Erlan from "./Erlan";
import NewBtn from "./NewBtn";
import Person from "./Person";

//Props это передача данных от родительского компонента к дочернему

let cars = {
  type: 'Lexus',
  model: 'GX 470',
  number: 'KG 01 ABN 001'

}


function App() {
  return (
    <div className="App">
     <Erlan/>
    </div>
  );
}

export default App;
