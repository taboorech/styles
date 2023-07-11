import { Route, Routes } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import ButtonsPage from "./containers/ButtonsPage/ButtonsPage";
import DropdownPage from "./containers/DropdownPage/DropdownPage";
import CardsPage from "./containers/CardsPage/CardsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} end></Route>
        <Route path="/buttons" element={<ButtonsPage/>}></Route>
        <Route path="/dropdown" element={<DropdownPage/>}></Route>
        <Route path="/cards" element={<CardsPage/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
