import "./App.css";
import ItemList from "./components/ItemList";
import Selector from "./components/Selector";
import ItemProvider from "./context/ItemProvider";

function App() {
  return (
    <ItemProvider>
      <div className="mx-auto bg-slate-900 min-h-screen">
        <div>
          <Selector />
        </div>
        <hr className="border-white" />
        <ItemList />
      </div>
    </ItemProvider>
  );
}

export default App;
