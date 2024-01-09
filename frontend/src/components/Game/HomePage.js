import React from 'react';
import NavBar from '../Navbar/Navbar';
import styles from './HomePage.module.css';
import diabloIV from './imgs2023Popular/diabloIV.jpg';
import fortnite from './imgs2023Popular/fortnite.jpg';
import gtav from './imgs2023Popular/gtav.jpg';
import hogwartsLegacy from './imgs2023Popular/hogwartsLegacy.jpg';
import jedi from './imgs2023Popular/jedi.jpg';
import spidermanII from './imgs2023Popular/spidermanII.jpg';
import starfield from './imgs2023Popular/starfield.jpg';
import zelda from './imgs2023Popular/zelda.jpg';
import bgIII from './imgs2023Popular/bgIII.jpg';
import marioWonder from './imgs2023Popular/marioWonder.jpg';
import { useEffect, useState } from 'react';

const HomePage = () => {

    const [games, setGames] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/games')
            .then((response) => response.json())
            .then((data) => setGames(data))
            .catch(error => console.error(error, 'erreur de connexion à la db'))
    
    }, []);


    return (
        <div className={styles.headerStyle}>
            <NavBar />
            <h1 className={styles.homePageTitle}>Les plus populaires en 2023 :</h1>
            <div className={styles.imgsContainer}>
                <img src={diabloIV} alt="diabloIV" className={styles.imgs} />
                <img src={fortnite} alt="fortnite" className={styles.imgs} />
                <img src={gtav} alt="gtav" className={styles.imgs} />
                <img src={hogwartsLegacy} alt="hogwartsLegacy" className={styles.imgs} />
                <img src={jedi} alt="jedi" className={styles.imgs} />
                <img src={spidermanII} alt="spidermanII" className={styles.imgs} />
                <img src={starfield} alt="starfield" className={styles.imgs} />
                <img src={zelda} alt="zelda" className={styles.imgs} />
                <img src={bgIII} alt="bgIII" className={styles.imgs} />
                <img src={marioWonder} alt="marioWonder" className={styles.imgs} />
            </div>

            <div>
                <h2>Test récupération :</h2>
                {games.map((game => (
                    <div key={game.gameID}>
                        <h3>{game.gameTitle}</h3>
                        <p>{game.gameType}</p>
                        {/* <p>{game.rating}</p>
                        <p>{game.review}</p> */}
                    </div>
                
                )))}
            </div>


        </div>
    );
}

export default HomePage;