import React from "react";
import undraw_woman from "../img/undraw_woman.png";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="description">
                <div className="title">Sua futura hospedagem aqui.</div>
                <Link to="/contact">
                    <button>Contato</button>
                </Link>
            </div>
            <div className="image">
                <img src={undraw_woman} alt="woman with a dog" />
            </div>
        </div>
    );
};

export default Home;
