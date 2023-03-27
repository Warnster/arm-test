import { Route, Routes } from "react-router-dom";
import { Home } from "./containers/Home";
import { Document } from "./containers/Document";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path=":documentId" element={<Document/>} />
      </Route>
    </Routes>
  );
}

export default App;
