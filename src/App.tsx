import { Route, Routes } from "react-router-dom";
import HomePage from "./app/dashboard/page";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
