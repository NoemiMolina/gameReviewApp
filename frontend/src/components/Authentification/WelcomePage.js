import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const { username } = useParams();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Redirection vers la page d'accueil
        navigate('/home');
    };

    return (
        <div>
            <h2>Bienvenue, {username} !</h2>
            <div>Qu'est-ce que Game Review App ?</div>
            <p>
                C'est un site dans lequel tu pourras commenter et noter des jeux vidéos. <br />
                Étant donné que le site est bien fait, les jeux sont rangés par genres. <br />
                Tu pourras également à tout moment modifier tes coordonnées !
            </p>
            <button type="button" onClick={handleButtonClick}>
                Lezgo
            </button>
        </div>
    );
};

export default WelcomePage;
