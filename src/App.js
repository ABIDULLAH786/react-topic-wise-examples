import { Route, Routes } from "react-router-dom";
import Outline from "./pages/outline";
import Hooks from "./pages/hooks";
import UseMemo from "./pages/hooks/use-memo";
import UseCallback from "./pages/hooks/use-callback";
import UseMemoExample from "./examples/hooks/use-memo";
import ExampleContainer from "./components/ExampleContainer";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Outline />} >
          <Route path="/hooks" element={<Hooks />}>
            <Route path="use-memo" element={<UseMemo />} />
            <Route path="use-callback" element={<UseCallback />} />

          </Route>
          <Route path="/examples" element={<ExampleContainer />} >
            <Route path="use-memo" element={<UseMemoExample />} />
          </Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
