import { Route, Routes } from "react-router-dom";
import HomePage from "./app/dashboard/page";
import LoginPage from "./app/login/page";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth/login' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
