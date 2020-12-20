import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Import Pages
import Presentation from "./pages/Presentation";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";

//Router
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route path="/" exact>
                    <Presentation />
                </Route>
                <Route path="/about">
                    <AboutUs />
                </Route>
                <Route path="/contact">
                    <ContactUs />
                </Route>
                <Route path="/gallery">
                    <Gallery />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
