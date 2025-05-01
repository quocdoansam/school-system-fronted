import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import Header from "./components/Header";

function App() {
  return (
    <div className='max-w-7xl mx-auto px-4'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
