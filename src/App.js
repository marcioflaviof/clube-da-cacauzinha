import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Import Pages
// import Presentation from "./pages/Presentation";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            {/* <Presentation /> */}
            <Nav />
            <AboutUs />
        </div>
    );
}

export default App;
