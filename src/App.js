import { Route, Routes } from "react-router-dom";
import Outline from "./pages/outline";
import Hooks from "./pages/hooks";
import UseMemo from "./pages/hooks/use-memo";
import UseCallback from "./pages/hooks/use-callback";
import UseMemoExample from "./examples/hooks/use-memo/example1";
import ExampleContainer from "./components/ExampleContainer";
import UseCallbackExample1 from "./examples/hooks/use-callback/example1";
import UseCallbackExample2 from "./examples/hooks/use-callback/example2";
import UseCallbackExample3 from "./examples/hooks/use-callback/example3";

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
            <Route path="use-callback-example1" element={<UseCallbackExample1 />} />
            <Route path="use-callback-example2" element={<UseCallbackExample2 />} />
            <Route path="use-callback-example3" element={<UseCallbackExample3 />} />
          </Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
