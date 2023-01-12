import Main from "./components/main/Main";
import Why from "./components/why/Why";
import How from "./components/how/How";
import "./reset.scss";
import Who from "./components/who/Who";
import Proccess from "./components/proccess/Proccess";
import Layout from "./components/layout/Layout";
import What from "./components/what/What";
import Privacy from "./components/privacy/Privacy";
import Terms from "./components/terms/Terms";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

function MainPage() {
  return (
    <>
      <Main />
      <What />
      <How />
      <Why />
      <Who />
      {/* <Testemonials/> */}
      <Proccess />
    </>
  );
}

function App() {
  return (
    <>
          <ScrollToTop />
      <Routes>

        <Route path="/">
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms&conditions" element={<Terms />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
