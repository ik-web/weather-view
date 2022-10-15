import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Popup from "./components/Popup/Popup";
import { usePopup } from "./hooks/usePopup";

function App() {
  const { isPopup } = usePopup();

  return (
    <div className="app">
      {isPopup && <Popup />}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
