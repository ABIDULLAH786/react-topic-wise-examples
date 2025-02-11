import { Route, Routes } from "react-router-dom";
import Outline from "./pages/outline";
import Hooks from "./pages/hooks";
import UseMemo from "./pages/hooks/use-memo";
import UseCallback from "./pages/hooks/use-callback";
import UseMemoExample from "./pages/hooks/use-memo/examples/example1";
import ExampleContainer from "./components/ExampleContainer";
import PureComponentTopic from "./pages/PureComponentTopic";
import UseCallbackExample1 from "./pages/hooks/use-callback/examples/example1";
import UseCallbackExample2 from "./pages/hooks/use-callback/examples/example2";
import PureCompExample from "./pages/PureComponentTopic/examples/PureCompExample";
import EventCapturingTopic from "./pages/EventCapturing";
import EventBublingTopic from "./pages/EventCapturing";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Outline />} >
          <Route path="/event-capturing" element={<EventCapturingTopic />} />

          <Route path="/event-bubling" element={<EventBublingTopic />} />

          <Route path="/pure-component" element={<PureComponentTopic />}>
            <Route path="examples" element={<ExampleContainer />} >
              <Route path="ex1" element={<PureCompExample />} />
            </Route>
          </Route>
          <Route path="/hooks" element={<Hooks />}>
            <Route path="use-memo" element={<UseMemo />}>
              <Route path="examples" element={<ExampleContainer />} >
                <Route path="ex1" element={<UseMemoExample />} />
              </Route>
            </Route>
            <Route path="use-callback" element={<UseCallback />}>
              <Route path="examples" element={<ExampleContainer />} >
                <Route path="ex1" element={<UseCallbackExample1 />} />
                <Route path="ex2" element={<UseCallbackExample2 />} />
              </Route>
            </Route>
          </Route>

        </Route>
      </Routes>
    </div >
  );
}

export default App;
