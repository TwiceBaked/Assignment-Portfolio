import Assignments from "./components/Assignments";

function App() {

  let items = ["Dice Roller", "Dice Roller Plus", "Resume", "ECAMs Billboard"];
  
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  
  return (
    <div>
      <Assignments heading = "Assignment Portfolio"/>
    </div>
  );
}

export default App;
