import { Route, Routes } from "react-router-dom";
import { Home } from "./containers/Home";
import { Document } from "./containers/Document";
import { DocumentRedirect } from "./containers/DocumentRedirect";

function App() {
  return (
    <div className="h-screen">
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path=":documentId" element={<DocumentRedirect/>} />
        <Route path=":documentId/:chapterTitle" element={<Document/>} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
