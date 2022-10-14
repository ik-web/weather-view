import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Popup from "./components/Popup/Popup";

function App() {
  const [isPopup, setIsPopup] = useState(false);

  return (
    <div className="app">
      {isPopup && <Popup setIsPopup={setIsPopup} />}
      <Header />
      <Main setIsPopup={setIsPopup} />
      <Footer />
    </div>
  );
}

export default App;
