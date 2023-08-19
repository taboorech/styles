import { Route, Routes } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import ButtonsPage from "./containers/ButtonsPage/ButtonsPage";
import DropdownPage from "./containers/DropdownPage/DropdownPage";
import CardsPage from "./containers/CardsPage/CardsPage";
import ModalsPage from "./containers/ModalsPage/ModalsPage";
import CollectionsPage from "./containers/CollectionsPage/CollectionsPage";
import MediaPage from "./containers/MediaPage/MediaPage";
import AudioPlayerPage from "./containers/AudioPlayerPage/AudioPlayerPage";
import NavbarPage from "./containers/NavbarPage/NavbarPage";
import TabsPage from "./containers/TabsPage/TabsPage";
import FooterPage from "./containers/FooterPage/FooterPage";
import PreloaderPage from "./containers/PreloaderPage/PreloaderPage";
import SliderPage from "./containers/SliderPage/SliderPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} end></Route>
        <Route path="/buttons" element={<ButtonsPage/>}></Route>
        <Route path="/dropdown" element={<DropdownPage/>}></Route>
        <Route path="/cards" element={<CardsPage/>}></Route>
        <Route path="/modals" element={<ModalsPage/>}></Route>
        <Route path="/collections" element={<CollectionsPage/>}></Route>
        <Route path="/media" element={<MediaPage/>}></Route>
        <Route path="/audioPlayer" element={<AudioPlayerPage/>}></Route>
        <Route path="/navbar" element={<NavbarPage/>}></Route>
        <Route path="/tabs" element={<TabsPage/>}></Route>
        <Route path="/footer" element={<FooterPage/>}></Route>
        <Route path="/preloader" element={<PreloaderPage/>}></Route>
        <Route path="/slider" element={<SliderPage/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
