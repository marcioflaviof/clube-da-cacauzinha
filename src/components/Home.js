import React from "react";
import undraw_woman from "../img/undraw_woman.png";

const Home = () => {
    return (
        <div>
            <div className="description">
                <div className="title">Sua futura hospedagem aqui.</div>
                <button>Contato</button>
            </div>
            <div className="image">
                <img src={undraw_woman} alt="woman with a dog" />
            </div>
        </div>
    );
};

export default Home;
